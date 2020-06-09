import React, { useState, useEffect } from 'react';
import Products from './products';

const Shop = props => {
  const [products, setProducts] = useState([]);
  const [swatches, setSwatches] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(false);

  // const getProducts = () => {
  //   fetch('/api/products')
  //     .then(promise => promise.json())
  //     .then(products => {
  //       setProducts(products);
  //       setFetchStatus(true);
  //     });
  // };

  // const getSwatches = () => {
  //   fetch('/api/swatches')
  //     .then(promise => promise.json())
  //     .then(swatches => {
  //       setSwatches(swatches);
  //     });
  // };

  async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setFetchStatus(true);
  }

  async function getSwatches(url) {
    const response = await fetch(url);
    const swatches = await response.json();
    setSwatches(swatches);
  }
  useEffect(() => {
    if (!fetchStatus) {
      getSwatches('/api/swatches');
      getProducts('/api/products');
    }
  });

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
