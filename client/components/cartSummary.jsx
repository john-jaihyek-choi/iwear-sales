import React from 'react';
import CartSummaryItem from './cartSummaryItem';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.closeCartView = this.closeCartView.bind(this);
  }

  closeCartView(event) {
    this.props.setView('catalog', {});
  }

  render() {
    let totalPrice = 0;
    this.props.cart.forEach(product => {
      totalPrice = totalPrice + product.price;
    });

    return (
      <div className="container my-auto">
        <div className="row mx-auto my-4">
          <h6 className="mx-2 backToCatalog" onClick={this.closeCartView}> &lt; Back to Catalog</h6>
        </div>
        <div className="row mx-auto">
          <h3 className="col">My Cart ({this.props.cart.length} Total Items)</h3>
          <h3 className="col text-right">Item Total ${(totalPrice / 100).toFixed(2)}</h3>
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
