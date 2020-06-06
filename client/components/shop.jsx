import React, { useState, useEffect } from 'react';
import Products from './products';

const Shop = props => {
  const [products, setProducts] = useState([]);
  const [swatches, setSwatches] = useState([]);
  const [productFetchStatus, setProductFetchStatus] = useState(false);
  const [swatchesFetchStatus, setSwatchesFetchStatus] = useState(false);

  const getProducts = () => {
    fetch('/api/products')
      .then(promise => promise.json())
      .then(products => {
        setProducts(products);
        setProductFetchStatus(true);
      });
  };

  const getSwatches = () => {
    fetch('/api/swatches')
      .then(promise => promise.json())
      .then(swatches => {
        setSwatches(swatches);
        setSwatchesFetchStatus(true);
      });
  };

  useEffect(() => {
    if (!productFetchStatus) {
      getProducts();
    }
    if (!swatchesFetchStatus) {
      getSwatches();
    }
  });

  return (
    <>
      <div className="container">
        <ul className='list-unstyled d-flex flex-wrap'>
          {(productFetchStatus && swatchesFetchStatus) ? <Products products={products} swatches={swatches}/> : <div>Loading...</div>}
        </ul>
      </div>
    </>
  );
};

export default Shop;
