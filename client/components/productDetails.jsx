import React from 'react';

const ProductDetails = props => {
  return (
    <div className='container'>
      <div className='row'>
        <ul className='list-unstyled d-flex'>
          <li className='mx-1'>Home</li>
          <li>&gt;</li>
          <li className='mx-1'>Shop</li>
          <li>&gt;</li>
          <li className='mx-1'>{props.match.params.productName.toUpperCase()}</li>
        </ul>
      </div>
      <div>

      </div>
    </div>
  );
};

export default ProductDetails;
