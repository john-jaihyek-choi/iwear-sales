import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Home extends React.Component {

  render() {
    return (
      <OwlCarousel items={1} className="owl-theme" autoplay margin={8} dots={false}>
        <div className="opticalCarousel container-fluid">
          <div className='carouselTextBox col-lg-6 col-md-6 position-relative d-flex justify-content-center'>
            <div className='carouselContent position-absolute mx-auto align-items-center'>
              <h3>Optical Glasses</h3>
              <h5>Explor our selection of fashion opitcal glasses to find the perfect frame that suits you best!</h5>
              <button className='btn btn-primary'>Shop Men</button>
              <button className='btn btn-primary'>Shop Women</button>
            </div>
          </div>
        </div>
        <div className="sunglassCarousel container-fluid row justify-content-end m-0 p-0">
          <div className='carouselTextBox col-lg-6 col-md-6 position-relative d-flex justify-content-center'>
            <div className='carouselContent position-absolute mx-auto align-items-center'>
              <h3>Optical Glasses</h3>
              <h5>Explor our selection of fashion opitcal glasses to find the perfect frame that suits you best!</h5>
              <button className='btn btn-primary'>Shop Men</button>
              <button className='btn btn-primary'>Shop Women</button>
            </div>
          </div>
        </div>
      </OwlCarousel>
    );
  }
}
