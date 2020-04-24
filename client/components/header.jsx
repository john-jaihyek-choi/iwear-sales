import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.viewCart = this.viewCart.bind(this);
    this.toMain = this.toMain.bind(this);
  }

  viewCart(event) {
    this.props.setView('cart', {});
  }

  toMain(event) {
    this.props.setView('catalog', {});
  }

  render() {
    return (
      <>
        <header>
          <div className="py-1 bg-black">
            <div className="container">
              <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                <div className="col-lg-12 d-block">
                  <div className="row d-flex">
                    <div className="col-md pr-4 d-flex topper align-items-center">
                      <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2"></span></div>
                      <span className="text">+ 1235 2355 98</span>
                    </div>
                    <div className="col-md pr-4 d-flex topper align-items-center">
                      <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
                      <span className="text">youremail@email.com</span>
                    </div>
                    <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                      <span className="text">3-5 Business days delivery &amp; Free Returns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="index.html">iWear</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse">
                <span></span> Menu
              </button>

              <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item nav-link active">Home</li>
                  <li className="nav-item nav-link">Shop</li>
                  <li className="nav-item nav-link">About</li>
                  <li className="nav-item nav-link">Contact</li>
                  <li className="nav-item nav-link"><i className='bx bxs-cart bx-sm'></i>[0]</li>

                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
