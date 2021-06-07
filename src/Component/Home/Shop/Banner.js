import React from 'react';
import model from '../../../images/model_7.png';
function Banner(props) {
    return (
        <div className="site-blocks-cover inner-page" data-aos="fade">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-auto order-md-2 align-self-start">
              <div className="site-block-cover-content">
                <h2 className="sub-title">#New Summer 2021</h2>
                <h1>Đại tiệc sale</h1>
              </div>
            </div>
            <div className="col-md-6 order-1 align-self-end">
              <img src={model} alt="Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

    );  
}

export default Banner;