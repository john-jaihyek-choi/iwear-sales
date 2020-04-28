import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Home extends React.Component {

  render() {
    return (
      <OwlCarousel items={1} className="owl-theme" autoplay margin={8} dots={false}>
        <div className="">
          <div className="container-fluid p-0">
            <div className="row d-md-flex no-gutters align-items-center justify-content-end" data-scrollax-parent="true">
              <div className="" style={{ backgroundImage: 'url(/assets/images/shake-weight.jpg)' }}></div> {/* where the image picture goes */}
              <div className="d-flex align-items-center" data-scrollax=" properties: { translateY: '70%' }"> {/*  where the text boxes go */}
                <div className="textbox position-relative">
                  <span className="subheading">Shop Men</span>
                  <div className="mainContent position-relative">
                    <div className="col-12 col-sm-6 rotate-sm-l-90">
                      <h3 className="h6">Best eCommerce Online Shop</h3>
                    </div>

                    <h1 className="mainHeading mb-4 mt-3">A Thouroughly <span>Modern</span> Woman</h1>
                    <p className="subtitle">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>

                    <p><a href="#" className="btn btn-primary px-5 py-3 mt-3">Shop Now</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    );
  }
}
