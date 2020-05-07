import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navStatus: false
    };
    this.navigate = this.navigate.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(event) {
    this.setState({
      navStatus: !this.state.navStatus
    });
  }

  navigate(event) {
    if (event.target.getAttribute('id') === 'home') return this.props.toggleView('home');
    if (event.target.getAttribute('id') === 'shop') return this.props.toggleView('shop');
    if (event.target.getAttribute('id') === 'about') return this.props.toggleView('about');
    if (event.target.getAttribute('id') === 'contact') return this.props.toggleView('contact');
    if (event.target.getAttribute('id') === 'cart') return this.props.toggleView('cart');
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
              <a href='/' className="navbar-brand text-dark text-decoration-none">iWear</a>
              <button className="navbar-toggler" onClick={this.toggleNav} type="button" data-toggle="collapse" data-target="header-nav" aria-controls="header-nav" aria-expanded="true" aria-label="Toggle navigation">
                <i className='bx bx-menu bx-sm align-middle' ></i>
                <span className="align-middle">Menu</span>
              </button>

              <div className={`collapse navbar-collapse ${this.state.navStatus ? 'show' : ''}`} id="header-nav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item nav-link active" onClick={this.navigate} id='home'><a href='/' className='text-dark text-decoration-none'>Home</a></li>
                  <li className="nav-item nav-link" onClick={this.navigate} id='shop'><a href='/shop' className='text-dark text-decoration-none'>Shop</a></li>
                  <li className="nav-item nav-link" onClick={this.navigate} id='about'><a href='/about' className='text-dark text-decoration-none'>About</a></li>
                  <li className="nav-item nav-link" onClick={this.navigate} id='contact'><a href='/contact' className='text-dark text-decoration-none'>Contact</a></li>
                  <li className="nav-item nav-link" onClick={this.navigate} id='cart'><a href='/cart' className='text-dark text-decoration-none'><i className='bx bxs-cart bx-xs'></i>[0]</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
