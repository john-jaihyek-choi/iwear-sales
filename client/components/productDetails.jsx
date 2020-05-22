import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = props => {
  const [details, setDetails] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(false);

  const getProductDetail = () => {
    fetch(`/api/details?productName=${props.match.params.productName}`)
      .then(promise => promise.json())
      .then(details => {
        setDetails(details);
        setFetchStatus(true);
      });
  };

  useEffect(() => {
    if (!fetchStatus) {
      getProductDetail();
    }
  });

  return (
    <div className='container'>
      <div className='row'>
        <ul className='list-unstyled d-flex'>
          <li className='mx-1'><Link to='/' className="text-secondary">Home</Link></li>
          <li>&gt;</li>
          <li className='mx-1'><Link to='/shop' className="text-secondary">Shop</Link></li>
          <li>&gt;</li>
          <li className='mx-1'>{props.match.params.productName.toUpperCase()}</li>
        </ul>
      </div>
      <div className='row text-dark'>
        <div className='col-lg-6 col-md-6'>
          <div>
            {fetchStatus
              ? <img src={`/assets/images/glasses/${details.name}/${details.name}_${details.availColors[0]}_1.png`} alt={`/assets/images/glasses/${details.name}/${details.name}_${details.availColors[0]}_1.png`}/>
              : <div>Loading...</div>
            }
          </div>
        </div>
        <div className='col-lg-6 col-md-6'>
          <div>
            {fetchStatus
              ? <>
                <h1>{(details.name).toUpperCase()}</h1>
                <span>{(details.type).toUpperCase()}</span>
                <h2>${(details.price / 100).toFixed(2)}</h2>
                <button className='btn btn-primary'>ADD TO CART</button>
              </>
              : <div>Loading...</div>
            }
          </div>
          <div>
            {fetchStatus
              ? <>
                <p>{details.description}</p>
                <p>Frame Width:{details.dimensions.FW}, Lens Height:{details.dimensions.LH}, Lens Width:{details.dimensions.LW}, Temple:{details.dimensions.T}</p>
              </>
              : <div>Loading...</div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
