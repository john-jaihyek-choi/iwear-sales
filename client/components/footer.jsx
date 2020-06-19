import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="bg-light pb-0">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="mb-4 ml-md-5 pl-md-5">
              <h2 className="footer-heading">iWear</h2>
              <p>iWear E-Commerece Website</p>
              <ul className="list-unstyled mt-5 d-flex flex-wrap">
                <li className="mx-2 text-dark"><a href="https://github.com/john-jaihyek-choi" target='_blank' rel="noopener noreferrer"><i className='bx bxl-github bx-md text-dark' ></i></a></li>
                <li className="mx-2"><a href="https://www.linkedin.com/in/johnjaihyekchoi/" target='_blank' rel="noopener noreferrer"><i className='bx bxl-linkedin bx-md text-dark' ></i></a></li>
                <li className="mx-2"><a href="https://johnjhc.com/" target='_blank' rel="noopener noreferrer"><i className='bx bxs-window-alt bx-md text-dark' ></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="mb-4 ml-md-5 pl-md-5">
              <h2 className="footer-heading">Menu</h2>
              <ul className="list-unstyled">
                <li className="footer-content"><Link to='/shop' className="text-decoration-none text-dark">Shop</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="mb-4 ml-md-5 pl-md-5">
              <h2 className="footer-heading">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul className="list-unstyled">
                  <li className="footer-content align-middle"><i className='bx bxs-map bx-sm align-middle'></i><a className="align-middle text-dark"> Orange County, CA</a></li>
                  <li className="footer-content align-middle"><i className='bx bxs-phone bx-sm align-middle' ></i><a className="align-middle text-decoration-none text-dark" href='tel:1-562-708-7297'> +1 (562) 708-7297</a></li>
                  <li className="footer-content align-middle"><i className='bx bx-mail-send bx-sm align-middle' ></i><a className="align-middle text-decoration-none text-dark" href="mailto:jaihyek.choi@gmail.com" target="_blank" rel="noopener noreferrer"> jaihyek.choi@gmail.com</a></li>
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
};

export default Footer;
