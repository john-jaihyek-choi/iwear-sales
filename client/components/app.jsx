import React from 'react';
import Header from './header';
import ProductList from './productList';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  render() {
    let content = null;
    if (this.state.view.name === 'catalog') {
      content = <ProductList setView={this.setView}/>;
    } else if (this.state.view.name === 'details') {
      content = <ProductDetails setView={this.setView} productId={this.state.view.params}/>;
    }

    return (
      <>
        <div className="container">
          <Header />
          {content}
        </div>
      </>
    );
  }
}
