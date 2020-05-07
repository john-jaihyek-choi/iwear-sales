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
          <div className="productDetails">
            <span>{name}</span><br/>
            <span>{price}</span><br/>
            <span>
              {availColors.map(color =>
                color + ', '
              )}
            </span><br/>
            <button>Add To Cart</button>
          </div>
        </div>
      </li>;

      return productInfo;
    });
    return test;
  }
}
