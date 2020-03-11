import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.viewCart = this.viewCart.bind(this);
  }

  viewCart(event) {
    this.props.setView('cart', {});
  }

  render() {
    return (
      <header className="row header">
        <div className="col my-auto">
          <h5>John&apos;s Wicked Sale</h5>
        </div>
        <div className="col my-auto offset-md-4">
          <i className="fas fa-shopping-cart fa-lg float-right goToCart shopCart" onClick={this.viewCart}></i>
          <h6 className="float-right mx-3 goToCart" onClick={this.viewCart}>Cart ({this.props.cartItemCount} {this.props.cartItemCount < 2 ? 'item' : 'items'})</h6>
        </div>
      </header>
    );
  }
}
