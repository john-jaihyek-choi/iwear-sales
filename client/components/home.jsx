import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const Home = () => {
  return (
    <OwlCarousel items={1} autoplay margin={8} dots={false} rewind autoplaySpeed={1500}>
      <div className="opticalCarousel container-fluid">
        <div className='carouselTextBox col-lg-6 col-md-6 position-relative d-flex justify-content-center'>
          <div className='carouselContent position-absolute mx-auto align-items-center p-2'>
            <h5>OPTICAL GLASSES</h5>
            <h3 className='font-weight-bold'>Explore our selection of fashion optical glasses to find the perfect frame that suits you!</h3>
            <div className='d-flex pt-4 text-center'>
              <button className='col btn mr-2'>SHOP MEN</button>
              {/* <button className='col btn'>SHOP WOMEN</button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="sunglassCarousel container-fluid row justify-content-end m-0 p-0">
        <div className='carouselTextBox col-lg-6 col-md-6 position-relative d-flex justify-content-center'>
          <div className='carouselContent position-absolute mx-auto align-items-center p-2'>
            <h5>SUNGLASSES</h5>
            <h3 className='font-weight-bold'>Protect your eyes from the sun with our latest sunglass collection!</h3>
            <div className='d-flex pt-4 text-center'>
              {/* <button className='col btn mr-2'>SHOP MEN</button>
              <button className='col btn'>SHOP WOMEN</button> */}
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default Home;
