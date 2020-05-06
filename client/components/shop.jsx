import React from 'react';
import Products from './products';

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
          <Products />
        </ul>
      </div>
    );
  }
}
