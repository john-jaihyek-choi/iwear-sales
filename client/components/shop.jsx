import React, { lazy, Suspense } from 'react';
const Products = lazy(() => import('./products'));

export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      swatches: []
    };
  }

  getProducts() {
    fetch('/api/products')
      .then(promise => promise.json())
      .then(products => {
        this.setState({
          products: products
        });
      });
  }

  getSwatches() {
    fetch('/api/swatches')
      .then(promise => promise.json())
      .then(swatches => {
        this.setState({
          swatches: swatches
        });
      });
  }

  componentDidMount() {
    this.getSwatches();
    this.getProducts();
  }

  render() {
    return (
      <div className="container">
        <ul className='list-unstyled d-flex flex-wrap'>
          <Suspense fallback={<div>Loading...</div>}>
            <Products products={this.state.products} swatches={this.state.swatches}/>
          </Suspense>
        </ul>
      </div>
    );
  }
}
