import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import DetailsTab from './detailsTab';

const handleClick = event => {
  if (event.target.className === 'swatch') {
    const target = event.target.parentNode.parentNode.parentNode.parentNode.previousSibling.firstChild.firstChild;
    const product = event.target.getAttribute('data-product');
    const color = event.target.getAttribute('data-color');
    return toggleSwatchColor(target, product, color);
  }
};

const toggleSwatchColor = (target, product, color) => {
  target.setAttribute('src', `/assets/images/glasses/${product}/${product}_${color}_1.png`);
  target.setAttribute('alt', `/assets/images/glasses/${product}/${product}_${color}_1.png`);
};

const ProductDetails = props => {
  const [details, setDetails] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(false);

  const callAPI = async () => {
    const detailsRes = await fetch(`/api/details?productName=${props.match.params.productName}`);
    const details = await detailsRes.json();

    setDetails(details);
    setFetchStatus(true);
  };

  useEffect(() => {
    if (!fetchStatus) {
      callAPI();
    }
  }, [fetchStatus]);

  return (
    <div className='container'>
      <div className='row my-4'>
        <ul className='list-unstyled d-flex'>
          <li className='mx-1'><Link to='/' className="text-secondary">Home</Link></li>
          <li>&gt;</li>
          <li className='mx-1'><Link to='/shop' className="text-secondary">Shop</Link></li>
          <li>&gt;</li>
          <li className='mx-1'>{props.match.params.productName.toUpperCase()}</li>
        </ul>
      </div>
      <div className='row text-dark my-4'>
        <div className='col-lg-7 col-md-6'>
          <div className='detailImg'>
            {fetchStatus
              ? <img src={`/assets/images/glasses/${details.name}/${details.name}_${details.availColors[0]}_1.png`} alt={`/assets/images/glasses/${details.name}/${details.name}_${details.availColors[0]}_1.png`}/>
              : <div>Loading...</div>
            }
          </div>
        </div>
        <div className='col-lg-5 col-md-6'>
          <div>
            {fetchStatus
              ? <section className='mb-4 basicDetails'>
                <h1 className='mb-2'>{(details.name).toUpperCase()}</h1>
                <span className='mb-4'>{(details.lensType).toUpperCase()}</span>
                <h2 className='mb-4'>${(details.price / 100).toFixed(2)}</h2>
                <div className='mb-4 detailSwatches'>
                  {details.availColors.map(color => {
                    const colorName = props.location.state.swatches[color].colorName;
                    return <Fragment key={`${details.name}_${color}`}>
                      <img className='swatch' src={`/assets/images/swatches/${color}.png`} alt={`/assets/images/swatches/${color}.png`} data-tip data-for={color} data-product={details.name} data-color={color} onClick={handleClick}/>
                      <ReactTooltip id={color}><span className='swatchColor'>{colorName}</span></ReactTooltip>
                    </Fragment>;
                  })}
                </div>
                <button className='btn btn-primary'>ADD TO CART</button>
              </section>
              : <div>Loading...</div>
            }
          </div>
          <div>
            {fetchStatus
              ? <section className='mb-4 tabPane'><DetailsTab details={details}/></section>
              : <div>Loading...</div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
