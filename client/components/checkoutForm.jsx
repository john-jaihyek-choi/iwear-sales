import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      creditCard: null,
      shippingAddress: null
    };
    this.continueShopping = this.continueShopping.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.confirmOrder = this.confirmOrder.bind(this);
  }

  continueShopping(event) {
    this.props.setView('catalog', {});
  }

  confirmOrder(event) {
    event.preventDefault();
    this.props.placeOrder(this.state);
  }

  inputChange(event) {
    switch (event.target.getAttribute('id')) {
      case 'name':
        this.setState({
          name: event.target.value
        });
        break;
      case 'creditCard':
        this.setState({
          creditCard: event.target.value
        });
        break;
      case 'shippingAddress':
        this.setState({
          shippingAddress: event.target.value
        });
        break;
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <h1 className="mt-4">My Cart</h1>
          <h5 className="text-muted mt-4">Order Total: <strong>${this.props.cartTotal}</strong></h5>
        </div>
        <form className="container justify-content-md-center" onSubmit={this.confirmOrder}>
          <label htmlFor="name" className="col mt-2 p-0">Name</label>
          <input className="col p-0" id="name" type="text" placeholder="First Name, Last Name" onChange={this.inputChange}/>
          <label htmlFor="creditCard" className="col mt-2 p-0">Credit Card</label>
          <input className="col p-0" id="creditCard" type="text" placeholder="4400 6678 2645 5789" onChange={this.inputChange}/>
          <label htmlFor="shippingAddress" className="col mt-2 p-0">Shipping Address</label>
          <textarea className="col p-0" id="shippingAddress" rows="5" placeholder="Street Name, City, State, ZipCode" onChange={this.inputChange}></textarea>
          <div className="row p-2">
            <h6 className="col mx-2 my-auto backToCatalog" onClick={this.continueShopping}> &lt; Continue Shopping</h6>
            <button type="submit" className="col offset-sm-5 btn btn-primary">Place Order</button>
          </div>
        </form>
      </>
    );
  }
}
