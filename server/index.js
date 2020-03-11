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
  const carts = `
    select *
      from "carts"
  `;

  db.query(carts)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.post('/api/carts', (req, res, next) => {
  const cart = `
    insert into "carts" ("cardId", "createdAt")
      values ("default", "deafult")
  `;

  // const cartId = `
  //   insert into "carts" ("cartId",)
  // `;

  if (!req.body.productId) {
    return (res.status(400).json({
      error: "Please input body content in following format ('productId'= #)"
    }));
  }
  if (!Number.isInteger(req.body.productId) || req.body.productId < 0) {
    return (res.status(400).json({
      error: 'Invalid entry, Product ID must be a positive integer'
    }));
  }

  db.query(cart)
    .then(result => {
      if (result.rows.length < 1) {
        throw new ClientError('There are no data rows present in carts table', 400);
      }
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
