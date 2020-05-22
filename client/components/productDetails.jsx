import React, { useState, useEffect } from 'react';

const ProductDetails = props => {
  const [details, setDetails] = useState(props.location.productProps || null);

  const getProductDetail = () => {
    fetch(`/api/details?productName=${props.match.params.productName}`)
      .then(promise => promise.json())
      .then(details => {
        setDetails(details);
      });
  };

  useEffect(() => {
    if (details == null) {
      getProductDetail();
    }
  }, []);

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
      <div className='row'>
        <div className='col-lg-6 col-md-6'>
          <div className='h-100'>
            {details
              ? <img src={`/assets/images/glasses/${details.name}/${details.name}_${details.availColors[0]}_1.png`} alt={`/assets/images/glasses/${details.name}/${details.name}_${details.availColors[0]}_1.png`}/>
              : <div>Loading...</div>
            }
          </div>
        </div>
        <div className='col-lg-6 col-md-6'>
          <div className='h-75'>
            {details
              ? <h1>{details.name}</h1>
              : <div>Loading...</div>
            }
          </div>
          <div className='h-25'>
                Description, shipping, dimension section
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
