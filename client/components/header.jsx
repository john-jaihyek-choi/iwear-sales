import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="row header">
        <div className="col my-auto">
          <h5>John&apos;s Wicked Sale</h5>
        </div>
        <div className="col my-auto offset-md-4">
          <i className="fas fa-shopping-cart fa-lg float-right"></i>
          <h6 className="float-right mx-3">Cart({this.props.cartItemCount} items)</h6>
        </div>
      </header>
    );
  }
}
