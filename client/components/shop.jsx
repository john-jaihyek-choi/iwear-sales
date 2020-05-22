import React, { useState, useEffect } from 'react';
import Products from './products';

const Shop = props => {
  const [products, setProducts] = useState([]);
  const [swatches, setSwatches] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(false);

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
        setFetchStatus(true);
      });
  };

  useEffect(() => {
    if (!fetchStatus) {
      getProducts();
      getSwatches();
    }
  }, []);

  return (
    <>
      <div className="container">
        <ul className='list-unstyled d-flex flex-wrap'>
          {(fetchStatus) ? <Products products={products} swatches={swatches}/> : <div>Loading...</div>}
        </ul>
      </div>
    </>
  );
};

export default Shop;
