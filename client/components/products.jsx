import React, { Fragment } from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

const Products = props => {

  const handleClick = event => {
    if (event.target.className === 'swatch') {
      const target = event.target.parentNode.parentNode.previousSibling.firstChild;
      const product = event.target.getAttribute('data-product');
      const color = event.target.getAttribute('data-color');
      return toggleSwatchColor(target, product, color);
    }
  };

  const toggleSwatchColor = (target, product, color) => {
    target.querySelector('.side').setAttribute('src', `assets/images/glasses/${product}/${product}_${color}_2.png`);
    target.querySelector('.side').setAttribute('alt', `assets/images/glasses/${product}/${product}_${color}_2.png`);
    target.querySelector('.front').setAttribute('src', `assets/images/glasses/${product}/${product}_${color}_1.png`);
    target.querySelector('.front').setAttribute('alt', `assets/images/glasses/${product}/${product}_${color}_1.png`);
  };

  const renderItems = () => {
    const products = props.products.map(product => {
      const name = product.name;
      const price = product.price;
      const availColors = product.availColors;
      const image1 = `assets/images/glasses/${name}/${name}_${availColors[0]}_1.png`;
      const image2 = `assets/images/glasses/${name}/${name}_${availColors[0]}_2.png`;

      const productInfo = <li key={name} className='col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4 mt-4'>
        <div className="productInfo text-center">
          <div className="productImage">
            <Link to='/details'>
              <img src={image2} className='side' alt={image2}/>
              <img src={image1} className='front' alt={image1}/>
            </Link>
          </div>
          <div className="productDetails text-dark">
            <div className='productName mb-2'><a href="/details" className='text-decoration-none text-dark'>{name.toUpperCase()}</a></div>
            <div className='productPrice mb-2'>${(price / 100).toFixed(2)}</div>
            <div className='productSwatches mb-4'>
              {availColors.map(color => {
                const swatchName = props.swatches[color].colorName;
                return (
                  <Fragment key={`${name}_${color}`}>
                    <img className='swatch' src={`assets/images/swatches/${color}.png`} alt={`assets/images/swatches/${color}.png`} data-tip data-for={swatchName} data-product={name} data-color={color} onClick={handleClick}/>
                    <ReactTooltip id={swatchName}><span className='swatchColor'>{swatchName}</span></ReactTooltip>
                  </Fragment>);
              })}
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <button className='addToCart btn btn-dark'>Add To Cart</button>
          </div>
        </div>
      </li>;

      return productInfo;
    });
    return products;
  };

  return renderItems();
};

export default Products;
