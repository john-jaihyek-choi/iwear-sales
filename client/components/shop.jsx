import React, { lazy, Suspense } from 'react';
const Products = lazy(() => import('./products'));

export default class shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  render() {
    return (
      <div className="container">
        <ul className='list-unstyled d-flex flex-wrap'>
          <Suspense fallback={<div>Loading...</div>}>
            <Products />
          </Suspense>
        </ul>
      </div>
    );
  }
}
