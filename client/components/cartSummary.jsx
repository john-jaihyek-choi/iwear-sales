import React from 'react';
import CartSummaryItem from './cartSummaryItem';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.closeCartView = this.closeCartView.bind(this);
    this.checkOut = this.checkOut.bind(this);
  }

  closeCartView(event) {
    this.props.setView('catalog', {});
  }

  checkOut(event) {
    event.preventDefault();
    this.props.setView('checkout', {});
  }

  render() {

    return (
      <div className="container my-auto">
        <div className="row mx-auto my-4">
          <h6 className="col offset-sm-6 mx-2 my-auto backToCatalog" onClick={this.closeCartView}> &lt; Back to Catalog</h6>
          <button className="col offset-sm-6 btn btn-primary" onClick={this.checkOut}>Checkout</button>
        </div>
        <div className="row mx-auto">
          <h3 className="col">My Cart ({this.props.cart.length} Total Items)</h3>
          <h3 className="col text-right">Item Total <span className="badge badge-primary">${this.props.cartTotal}</span></h3>
        </div>
        <div className="container">
          {this.props.cart.map((product, index) =>
            <CartSummaryItem key={product.cartItemId} cartItems={this.props.cart} currentIndex={index}/>
          )}
        </div>
      </div>
    );
  }
}
