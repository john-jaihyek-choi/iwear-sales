import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    return (
      <div className="w-25 m-3 card" onClick={this.props.viewDetails} id={this.props.productId}>
        <div className="card-body catalog">
          <img src={this.props.image} className="card-img-top" alt={`${this.props.name} img`}/>
          <h5 className="card-title my-2">{this.props.name}</h5>
          <p className="card-text"><small className="text-muted">{`$ ${(this.props.price / 100).toFixed(2)}`}</small></p>
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
    );
  }
}
