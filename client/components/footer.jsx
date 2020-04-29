import React from 'react';

export default class Footer extends React.Component {

  render() {
    return (
      <footer className="bg-light pb-0">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="mb-4">
                <h2 className="footer-heading">iWear</h2>
                <p>iWear E-Commerece Website</p>
                <ul className="list-unstyled mt-5 d-flex flex-wrap">
                  <li className="mx-2 text-dark"><a href="#"><i className='bx bxl-github bx-md text-dark' ></i></a></li>
                  <li className="mx-2"><a href="#"><i className='bx bxl-linkedin bx-md text-dark' ></i></a></li>
                  <li className="mx-2"><a href="#"><i className='bx bxs-window-alt bx-md text-dark' ></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="mb-4 ml-md-5">
                <h2 className="footer-heading">Menu</h2>
                <ul className="list-unstyled">
                  <li className="footer-content">Shop</li>
                  <li className="footer-content">About</li>
                  <li className="footer-content">Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="mb-4">
                <h2 className="footer-heading">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul className="list-unstyled">
                    <li className="footer-content align-middle"><i className='bx bxs-map bx-sm align-middle'></i><span className="align-middle"> Orange County, CA</span></li>
                    <li className="footer-content align-middle"><i className='bx bxs-phone bx-sm align-middle' ></i><span className="align-middle"> +1 123 456 7890</span></li>
                    <li className="footer-content align-middle"><i className='bx bx-mail-send bx-sm align-middle' ></i><span className="align-middle"> email@yourdomain.com</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>Copyright &copy;2020  All images appearing on this site are the property of their respective owners. </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
