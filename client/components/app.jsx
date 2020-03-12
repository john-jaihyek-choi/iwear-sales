import React from 'react';
import Header from './header';
import ProductList from './productList';
import ProductDetails from './product-details';
import CartSummary from './cartSummary';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  getCartItems() {
    fetch('/api/carts')
      .then(response => response.json())
      .then(cartItems => {
        this.setState({
          cart: cartItems
        });
      });
  }

  componentDidMount() {
    this.getCartItems();
  }

  addToCart(product) {
    fetch('/api/carts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productId: product.productId
      })
    })
      .then(response => response.json())
      .then(addedProduct => {
        const newCart = this.state.cart.concat(addedProduct);
        this.setState({
          cart: newCart
        });
      });
  }

  render() {
    let content = null;
    if (this.state.view.name === 'catalog') {
      content = <ProductList setView={this.setView}/>;
    } else if (this.state.view.name === 'details') {
      content = <ProductDetails addToCart={this.addToCart} setView={this.setView} productId={this.state.view.params}/>;
    } else if (this.state.view.name === 'cart') {
      content = <CartSummary cart={this.state.cart} setView={this.setView}/>;
    }

    return (
      <>
        <div className="container-fluid">
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          {content}
        </div>
      </>
    );
  }
}
