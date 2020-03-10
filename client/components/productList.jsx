import React from 'react';
import ProductListItem from './productListItem';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(products => {
        this.setState({
          products: products
        });
      });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="body row">
        <div className="deck">
          {this.state.products.map(item =>
            <ProductListItem key={`item${item.productId}`} name={item.name} description={item.shortDescription} price={item.price} image={item.image}/>
          )}
        </div>
      </div>
    );
  }
}
