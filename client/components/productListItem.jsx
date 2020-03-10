import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    return (
      <div className="w-25 m-3 card">
        <div className="card-body">
          <img src={this.props.image} className="card-img-top" alt={`${this.props.name} img`}/>
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text"><small className="text-muted">{`$ ${(this.props.price / 100).toFixed(2)}`}</small></p>
          <p className="card-text">{this.props.description}</p>
          {/* <button href="" className="btn btn-primary">Add To Cart</button> */}
        </div>
      </div>
    );
  }
}
