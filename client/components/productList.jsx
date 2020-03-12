import React from 'react';
import ProductListItem from './productListItem';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.viewDetails = this.viewDetails.bind(this);
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

  viewDetails(event) {
    const productId = Number(event.currentTarget.getAttribute('id'));
    this.props.setView('details', productId);
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="body row">
        {this.state.products.map(item =>
          <ProductListItem
            viewDetails={this.viewDetails}
            key={`item${item.productId}`}
            name={item.name}
            description={item.shortDescription}
            price={item.price} image={item.image}
            productId={item.productId}/>
        )}
      </div>
    );
  }
}
