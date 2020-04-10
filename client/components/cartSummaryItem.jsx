import React from 'react';

export default class CartSummaryItem extends React.Component {
  render() {
    return (
      <div className="row my-3 justify-content-md-center border">
        <div className="col d-flex justify-content-center">
          <img src={this.props.cartItems[this.props.currentIndex].image} alt="" className="cartProductImg"/>
        </div>
        <div className="col align-self-center mt-2">
          <h4 className="font-weight-bold cartItemDescription">{this.props.cartItems[this.props.currentIndex].name}</h4>
          <p className="cartItemDescription">${(this.props.cartItems[this.props.currentIndex].price / 100).toFixed(2)}</p>
          <p className="cartItemDescription">{this.props.cartItems[this.props.currentIndex].shortDescription}</p>
        </div>
      </div>
    );
  }
}
