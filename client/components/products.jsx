import React from 'react';

export default class Products extends React.Component {

  render() {
    const test = this.props.products.map(product => {
      const name = product.name;
      const price = product.price;
      const availColors = product.availColors;
      const image1 = `assets/images/glasses/${name}/${name}_${availColors[0]}_1.png`;
      const image2 = `assets/images/glasses/${name}/${name}_${availColors[0]}_2.png`;

      const productInfo = <li key={name} className='col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4 mt-4'>
        <div className="productInfo text-center">
          <div className="productImage">
            <img src={image2} className='side' alt={image2} />
            <img src={image1} className='front' alt={image1} />
          </div>
          <div className="productDetails text-dark">
            <div className='productName mb-2'>{name.toUpperCase()}</div>
            <div className='productPrice mb-2'>${(price / 100).toFixed(2)}</div>
            <div className='productSwatches mb-4'>
              {availColors.map(color =>
                <img key={`swatch_${color}`} src={`assets/images/swatches/${color}.png`} alt={`assets/images/swatches/${color}.png`}/>
              )}
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <button className='addToCart btn btn-dark'>Add To Cart</button>
          </div>
        </div>
      </li>;

      return productInfo;
    });
    return test;
  }
}
