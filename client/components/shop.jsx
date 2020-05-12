import React, { useState, useEffect, lazy, Suspense } from 'react';
const Products = lazy(() => import('./products'));

const Shop = props => {
  const [products, setProducts] = useState([]);
  const [swatches, setSwatches] = useState([]);

  const getProducts = () => {
    fetch('/api/products')
      .then(promise => promise.json())
      .then(products => {
        setProducts(products);
      });
  };

  const getSwatches = () => {
    fetch('/api/swatches')
      .then(promise => promise.json())
      .then(swatches => {
        setSwatches(swatches);
      });
  };

  useEffect(() => {
    getProducts();
    getSwatches();
  }, []);

  return (
    <div className="container">
      <ul className='list-unstyled d-flex flex-wrap'>
        <Suspense fallback={<div>Loading...</div>}>
          <Products products={products} swatches={swatches}/>
        </Suspense>
      </ul>
    </div>
  );
};

export default Shop;
