import React from 'react';

export default class Footer extends React.Component {

  render() {
    return (
      <footer className="bg-light">
        <div className="container">
          <div className="row">
            <div className="mouse">
              <a href="#" className="mouse-icon">
                <div className="mouse-wheel"><span className="ion-ios-arrow-up"></span></div>
              </a>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md">
              <div className="mb-4">
                <h2 className="">iWear</h2>
                <p>iWear E-Commerece Website</p>
                <ul className="list-unstyled float-md-left float-lft mt-5">
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="mb-4 ml-md-5">
                <h2>Menu</h2>
                <ul className="list-unstyled">
                  <li><a href="#" className="py-2 d-block">Shop</a></li>
                  <li><a href="#" className="py-2 d-block">About</a></li>
                  <li><a href="#" className="py-2 d-block">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="mb-4">
                <h2>Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon icon-map-marker"></span><span className="text">Orange County, CA</span></li>
                    <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                    <li><a href="#"><span className="icon icon-envelope"></span><span className="text">email@yourdomain.com</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              {/* <p>Copyright &copy; All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="" target="_blank">Colorlib</a></p> */}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
