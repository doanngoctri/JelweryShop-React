import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import Image1 from '../../images/model_3.png';
import Image2 from '../../images/model_7.png';
import Image3 from '../../images/model_2.png';
import {Link} from 'react-router-dom'
function Slider(props) {
    return (
    <div className="slide-container">
        <Slide>
            <div className="each-fade">
                <div className="image-container">
                    <div className="site-blocks-cover" data-aos="fade">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 ml-auto order-md-2 align-self-start">
                                    <div className="site-block-cover-content">
                                        <h2 className="sub-title">#New Summer 2021</h2>
                                        <h1>Chào mừng bạn !</h1>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 align-self-end">
                                 <img src={Image1} alt="Image" className="img-fluid" />
                                
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="each-fade">
                 <div className="image-container">
                    <div className="site-blocks-cover" data-aos="fade">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 ml-auto order-md-2 align-self-start">
                                    <div className="site-block-cover-content">
                                        <h2 className="sub-title">#New Summer 2021</h2>
                                        <h1>Đại tiệc Sale!</h1>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 align-self-end">
                                    <img src={Image2} alt="Image" className="img-fluid" />
                                
                                 </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="each-fade">
                <div className="image-container">
                    <div className="site-blocks-cover" data-aos="fade">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 ml-auto order-md-2 align-self-start">
                                        <div className="site-block-cover-content">
                                            <h2 className="sub-title">#New Summer 2021</h2>
                                            <h1>Mời bạn đến</h1>
                                        </div>
                                    </div>
                                    <div className="col-md-6 order-1 align-self-end">
                                        <img src={Image3} alt="Image" className="img-fluid" />
                                        <p><Link to="/shop" className="btn btn-black rounded-0">Đến cửa hàng</Link></p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </Slide>
    </div>
    );
}

export default Slider;