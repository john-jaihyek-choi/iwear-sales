import React, { Fragment, useRef, createRef } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

const handleClick = (event, refs) => {
  if (event.target.className === 'swatch') {
    const product = event.target.getAttribute('data-product');
    const color = event.target.getAttribute('data-color');

    const frontUrl = `/assets/images/glasses/${product}/${product}_${color}_1.png`;
    const sideUrl = `/assets/images/glasses/${product}/${product}_${color}_2.png`;

    const frontImg = refs[0].current[event.target.getAttribute('data-ref_index')].current;
    frontImg.src = frontUrl;
    frontImg.alt = frontUrl;

    const sideImg = refs[1].current[event.target.getAttribute('data-ref_index')].current;
    sideImg.src = sideUrl;
    sideImg.alt = sideUrl;
  }
};

const Products = props => {
  const frontImageRef = useRef(props.products.map(() => createRef()));
  const sideImageRef = useRef(props.products.map(() => createRef()));

  return (props.products.map((product, refIndex) => {
    const name = product.name;
    const price = product.price;
    const availColors = product.availColors;
    const image1 = `/assets/images/glasses/${name}/${name}_${availColors[0]}_1.png`;
    const image2 = `/assets/images/glasses/${name}/${name}_${availColors[0]}_2.png`;

    return (<li key={name} className='col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4 mt-4'>
      <section className="productInfo text-center">
        <div className="productImage">
          <Link to={{
            pathname: `/shop/${name}`,
            state: {
              swatches: props.swatches
            }
          }}>
            <img src={image2} className='side' alt={image2} ref={sideImageRef.current[refIndex]}/>
            <img src={image1} className='front' alt={image1} ref={frontImageRef.current[refIndex]}/>
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
                  <img
                    className='swatch'
                    src={`/assets/images/swatches/${color}.png`}
                    alt={`/assets/images/swatches/${color}.png`}
                    onClick={() => handleClick(event, [frontImageRef, sideImageRef])}
                    data-tip data-for={swatchName}
                    data-product={name}
                    data-color={color}
                    data-ref_index={refIndex}
                  />
                  <ReactTooltip id={swatchName}><span className='swatchColor'>{swatchName}</span></ReactTooltip>
                </Fragment>);
            })}
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <button className='addToCart btn btn-dark'>Add To Cart</button>
        </div>
      </section>
    </li>);
  }));
};

export default Products;
