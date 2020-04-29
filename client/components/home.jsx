import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Home extends React.Component {

  render() {
    return (
      <OwlCarousel items={1} className="owl-theme" autoplay margin={8} dots={false}>
        <div className="container d-flex container-fluid">
          <div className='row p-4'>
            <div className='col p-4 p-md-1 p-sm-0'>
              <div className='textIntro d-flex p-4'>
                <div className="col-12 horizontal">
                  <h1 className="mb-4 mt-3">A Thouroughly <span>Modern</span> Woman</h1>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
                  <p><a href="#" className="btn btn-primary px-5 py-3 mt-3">Shop Now</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    );
  }
}
