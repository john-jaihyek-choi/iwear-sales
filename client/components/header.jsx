import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.viewCart = this.viewCart.bind(this);
    this.toMain = this.toMain.bind(this);
  }

  viewCart(event) {
    this.props.setView('cart', {});
  }

  toMain(event) {
    this.props.setView('catalog', {});
  }

  render() {
    return (
      <header className="row header">
        <div className="col my-auto px-0">
          <img onClick={this.toMain} className="logo" src="/images/iwearLogo.png" alt="iWearLogo"/>
          {/* <h5 onClick={this.toMain} className="logo">John&apos;s Wicked Sale</h5> */}
        </div>
        <div className="col my-auto offset-md-4 px-0">
          <i className="fas fa-shopping-cart fa-lg float-right goToCart shopCart" onClick={this.viewCart}></i>
          <h6 className="float-right mx-3 goToCart" onClick={this.viewCart}>Cart ({this.props.cartItemCount} {this.props.cartItemCount < 2 ? 'item' : 'items'})</h6>
        </div>
      </header>
    );
  }
}
