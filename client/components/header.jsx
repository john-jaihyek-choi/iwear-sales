import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  const [navStatus, setNavStatus] = useState(false);

  const navigate = event => {
    setNavStatus(!navStatus);
  };

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
                    <span className="text text-white"><a href='tel:1-562-708-7297' className='text-decoration-none text-white'><i className='bx bxs-phone' ></i>+1 (562) 708-7297</a></span>
                  </div>
                  <div className="col-md pr-4 d-flex align-items-center justify-content-center">
                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
                    <span className="text text-white"><a href="mailto:jaihyek.choi@gmail.com" target='_blank' rel="noopener noreferrer" className='text-decoration-none text-white'><i className='bx bx-paper-plane' ></i>jaihyek.choi@gmail.com</a></span>
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
            <Link to='/' onClick={navigate} className="navbar-brand text-decoration-none">iWear</Link>
            <button className="navbar-toggler" type="button" onClick={navigate} data-toggle="collapse" data-target="header-nav" aria-controls="header-nav" aria-expanded="true" aria-label="Toggle navigation">
              <i className='bx bx-menu bx-sm align-middle' ></i>
              <span className="align-middle">Menu</span>
            </button>

            <div className={`collapse navbar-collapse ${navStatus ? 'show' : ''}`} id="header-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item nav-link active"><Link to='/' className="text-decoration-none" onClick={navigate}>Home</Link></li>
                <li className="nav-item nav-link"><Link to='/shop' className="text-decoration-none" onClick={navigate}>Shop</Link></li>
                {/* <li className="nav-item nav-link"><Link to='/about' className="text-decoration-none" onClick={navigate}>About</Link></li>
                <li className="nav-item nav-link"><Link to='/contact' className="text-decoration-none" onClick={navigate}>Contact</Link></li> */}
                <li className="nav-item nav-link"><Link to='/cart' className="text-decoration-none" onClick={navigate}><i className='bx bxs-cart bx-xs'></i>[0]</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
