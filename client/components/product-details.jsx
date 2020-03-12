import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
    this.closeDetail = this.closeDetail.bind(this);
    this.addToCartHandle = this.addToCartHandle.bind(this);
  }

  closeDetail(event) {
    this.props.setView('catalog', {});
  }

  addToCartHandle(event) {
    event.preventDefault();
    this.props.addToCart(this.state.product);
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.productId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          product: data
        });
      });
  }

  render() {
    return (
      <div className="body row details my-4">
        <div className="container border">
          <div className="row">
            <h6 className="col mx-2 my-2 backToCatalog" onClick={this.closeDetail}> &lt; Back to Catalog</h6>
          </div>
          <div className="row ">
            <div className="col detailsImg">
              <img src={this.state.product.image} alt={`product${this.state.product.productId} image`}/>
            </div>
            <div className="col">
              <h3>{this.state.product.name}</h3>
              <p className="text-muted">{`$ ${(this.state.product.price / 100).toFixed(2)}`}</p>
              <p>{this.state.product.shortDescription}</p>
              <button onClick={this.addToCartHandle}className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
          <div className="row">
            <div className="col my-4">
              <p>{this.state.product.longDescription}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
