import React from 'react';
import Header from './header';
import ProductList from './productList';

export default class App extends React.Component {

  render() {
    return (
      <>
        <div className="container">
          <Header />
          <ProductList />
        </div>
      </>
    );
  }
}
