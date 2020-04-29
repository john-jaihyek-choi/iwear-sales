import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navStatus: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.viewCart = this.viewCart.bind(this);
    this.toMain = this.toMain.bind(this);
  }

  viewCart(event) {
    this.props.setView('cart', {});
  }

  toMain(event) {
    this.props.setView('catalog', {});
  }

  toggleNav(event) {
    this.setState({
      navStatus: !this.state.navStatus
    });
  }

  render() {
    return (
      <>
        <header>
          <div className="py-1 topper">
            <div className="container">
              <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                <div className="col-lg-12 d-block">
                  <div className="row d-flex">
                    <div className="col-md pr-4 d-flex align-items-center justify-content-center">
                      <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2"></span></div>
                      <span className="text text-white"><i className='bx bxs-phone' ></i>+ 1235 2355 98</span>
                    </div>
                    <div className="col-md pr-4 d-flex align-items-center justify-content-center">
                      <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
                      <span className="text text-white"><i className='bx bx-paper-plane' ></i>youremail@email.com</span>
                    </div>
                    <div className="col-md-5 pr-4 d-flex align-items-center text-lg-right justify-content-center">
                      <span className="text text-white"><i className='bx bxs-truck' ></i>3-5 Business days delivery &amp; Free Returns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg bg-white">
            <div className="container">
              <a className="navbar-brand" href="index.html">iWear</a>
              <button className="navbar-toggler" onClick={this.toggleNav} type="button" data-toggle="collapse" data-target="header-nav" aria-controls="header-nav" aria-expanded="true" aria-label="Toggle navigation">
                <i className='bx bx-menu bx-sm align-middle' ></i>
                <span className="align-middle">Menu</span>
              </button>

              <div className={`collapse navbar-collapse ${this.state.navStatus ? 'show' : ''}`} id="header-nav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item nav-link active">Home</li>
                  <li className="nav-item nav-link">Shop</li>
                  <li className="nav-item nav-link">About</li>
                  <li className="nav-item nav-link">Contact</li>
                  <li className="nav-item nav-link"><i className='bx bxs-cart bx-xs'></i>[0]</li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
