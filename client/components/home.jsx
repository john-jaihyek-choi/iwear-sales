import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Home extends React.Component {

  render() {
    return (
      <OwlCarousel items={1} className="owl-theme" autoplay margin={8} dots={false}>
        <div className="opticalCarousel container-fluid">
          <div className='carouselTextBox col-lg-6 col-md-6'>
              test
          </div>
        </div>
        {/* <div className="sunglassCarousel container-fluid">
          <div className='row'>

          </div>
        </div> */}
      </OwlCarousel>
    );
  }
}
