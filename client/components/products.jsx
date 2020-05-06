import React from 'react';

export default class Products extends React.Component {

  render() {
    return (
      <>
        <li className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
          <div className="productInfo text-center">
            <div className="productImage position-relative">
              <img src="assets/images/glasses/palma/palma_g_1.png" alt=""/>
            </div>
            <div className="productDetails">
              <span>product name1</span><br/>
              <span>price</span><br/>
              <span>list of avail colors in image</span><br/>
              <button>hover effect button slide up</button>
            </div>
          </div>
        </li>
        <li className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
          <div className="productInfo text-center">
            <div className="productImage position-relative">
              <img src="assets/images/glasses/elliot/elliot_g_1.png" alt=""/>
            </div>
            <div className="productDetails">
              <span>product name2</span><br/>
              <span>price</span><br/>
              <span>list of avail colors in image</span><br/>
              <button>hover effect button slide up</button>
            </div>
          </div>
        </li>
        <li className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
          <div className="productInfo text-center">
            <div className="productImage position-relative">
              <img src="assets/images/glasses/morrell/morrell_g_1.png" alt=""/>
            </div>
            <div className="productDetails">
              <span>product name3</span><br/>
              <span>price</span><br/>
              <span>list of avail colors in image</span><br/>
              <button>hover effect button slide up</button>
            </div>
          </div>
        </li>
      </>
    );
  }
}
