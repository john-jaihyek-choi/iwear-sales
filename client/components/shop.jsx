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
        <ul className='list-unstyled'>
          <Suspense fallback={<div>Loading...</div>}>
            <Products />
          </Suspense>
        </ul>
      </div>
    );
  }
}
