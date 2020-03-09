import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.image} className="card-img-top" alt={`${this.props.name} img`}/>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text"><small className="text-muted">{this.props.price}</small></p>
          <p className="card-text">{this.props.description}</p>
          <a href="" className="btn btn-primary">Add To Cart</a>
        </div>
      </div>
    );
  }
}
