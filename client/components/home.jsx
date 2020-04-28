import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Home extends React.Component {

  render() {
    return (
      <OwlCarousel items={1} className="owl-theme" autoplay margin={8} dots={false}>
        <div className="container d-flex">
          <div className='row w-50'>
            <div className='col-6'>
              <div className='textIntro'>
                test
              </div>
            </div>
          </div>
          <div className='row w-50'>
            <div className='col-6'>
              <div className="imgIntro">
                Image
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    );
  }
}
