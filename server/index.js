require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/products', (req, res, next) => {
  const products = `
    select *
    from "products"
  `;

  db.query(products)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const products = `
    select *
      from "products"
      where "productId" = $1
  `;

  const value = [req.params.productId];

  if (!Number.isInteger(Number(value[0])) || value[0] < 0) {
    return (res.status(400).json({
      error: 'Grade ID must be a positive integer.'
    }));
  }

  db.query(products, value)
    .then(result => {
      const [item] = result.rows;
      if (!item) {
        res.status(404).json({
          error: `Product ID ${req.params.productId} does not exist`
        });
      } else {
        res.json(item);
      }
    })
    .catch(err => next(err));
});

app.get('/api/carts', (req, res, next) => {
  if (!req.session.cartId) {
    const emptyArr = [];
    return emptyArr;
  }
  const carts = `
    select "c"."cartItemId",
      "c"."price",
      "p"."productId",
      "p"."image",
      "p"."name",
      "p"."shortDescription"
      from "cartItems" as "c"
      join "products" as "p" using ("productId")
      where "c"."cartId" = $1
  `;

  const cartsValue = [req.session.cartId];

  db.query(carts, cartsValue)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.post('/api/carts', (req, res, next) => {
  if (!req.body.productId) {
    return (res.status(400).json({
      error: "Please input body content in following format ('productId'= #)"
    }));
  }
  if (!Number.isInteger(Number(req.body.productId)) || req.body.productId < 0) {
    return (res.status(400).json({
      error: 'Invalid entry, Product ID must be a positive integer'
    }));
  }

  const price = `
    select "price"
      from "products"
      where "productId" = $1
  `;

  const priceValue = [req.body.productId];

  db.query(price, priceValue)
    .then(result1 => {
      if (result1.rows.length < 1) {
        throw new ClientError('There are no data rows present in carts table', 400);
      }
      if (req.session.cartId) {
        const promiseObj = {};
        const [price] = result1.rows;
        Object.assign(promiseObj, req.session, price);
        return promiseObj;
      }

      const [price] = result1.rows;

      const cartId = `
        insert into "carts" ("cartId", "createdAt")
          values (default, default)
          returning "cartId"
      `;

      const promiseObj = db.query(cartId)
        .then(result2 => {
          const [cartId] = result2.rows;
          const finalResult = {};
          Object.assign(finalResult, cartId, price);
          return finalResult;
        });
      return promiseObj;
    })
    .then(result1 => {
      req.session.cartId = result1.cartId;

      const cartItems = `
        insert into "cartItems" ("cartId", "productId", "price")
          values ($1, $2, $3)
          returning "cartItemId"
        `;
      const cartItemsValues = [result1.cartId, req.body.productId, result1.price];

      const promiseObj = db.query(cartItems, cartItemsValues)
        .then(result2 => {
          const [itemId] = result2.rows;
          return itemId;
        });
      return promiseObj;
    })
    .then(result1 => {
      const cartItemId = `
        select "c"."cartItemId",
          "c"."price",
          "p"."productId",
          "p"."image",
          "p"."name",
          "p"."shortDescription"
          from "cartItems" as "c"
          join "products" as "p" using ("productId")
          where "c"."cartItemId" = $1
        `;
      const cartItemIdValue = [result1.cartItemId];

      const promiseObj = db.query(cartItemId, cartItemIdValue)
        .then(result2 => {
          const [cartItem] = result2.rows;
          res.status(201).json(cartItem);
        });
      return promiseObj;
    });
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
