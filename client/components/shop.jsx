import React, { useState, useEffect } from 'react';
import Products from './products';

const Shop = props => {
  const [products, setProducts] = useState([]);
  const [swatches, setSwatches] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(false);

  const getProducts = async () => {
    await fetch('/api/products')
      .then(promise => promise.json())
      .then(products => {
        setProducts(products);
      });
  };

  const getSwatches = async () => {
    await fetch('/api/swatches')
      .then(promise => promise.json())
      .then(swatches => {
        setSwatches(swatches);
      });
  };

  const changeLoad = async () => {
    await setFetchStatus(true);
  };

  useEffect(() => {
    if (!fetchStatus) {
      getSwatches();
      getProducts();
      changeLoad();
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
