import React from 'react';
import Header from './header';
import Footer from './footer';
// import ProductList from './productList';
// import ProductDetails from './product-details';
// import CartSummary from './cartSummary';
// import CheckoutForm from './checkoutForm';

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
    this.placeOrder = this.placeOrder.bind(this);
    this.calculateCartTotal = this.calculateCartTotal.bind(this);
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

  calculateCartTotal() {
    let totalPrice = 0;
    this.state.cart.forEach(product => {
      totalPrice = totalPrice + product.price;
    });
    return (totalPrice / 100).toFixed(2);
  }

  placeOrder(buyerInfo) {
    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: buyerInfo.name,
        creditCard: buyerInfo.creditCard,
        shippingAddress: buyerInfo.shippingAddress
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          view: {
            name: 'catalog',
            params: {}
          },
          cart: []
        });
      });
  }

  componentDidMount() {
    this.getCartItems();
  }

  render() {
    return (
      <>
        <Header />
        <Footer />
      </>
    );
  }
}
