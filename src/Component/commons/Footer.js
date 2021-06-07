import React from 'react';
import image1 from '../../images/about_1.jpg'
function Footer(props) {
    return (
            <footer className="site-footer custom-border-top">
             <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <h3 className="footer-heading mb-4">Với chúng tôi</h3>
                    <a href="#" className="block-6">
                        <img src={image1} alt="Image placeholder" className="img-fluid rounded mb-4" />
                        <h3 className="font-weight-light  mb-0">Đến với chúng tôi bạn sẽ có những bộ trang sức Bling Bling</h3>
                        <p>Thành lập : 01 - 01 - 2021</p>
                    </a>
                    </div>
                    <div className="col-lg-5 ml-auto mb-5 mb-lg-0">
                    <div className="row">
                        <div className="col-md-12">
                        <h3 className="footer-heading mb-4">Quick Links</h3>
                        </div>
                        <div className="col-md-6 col-lg-4">
                        <ul className="list-unstyled">
                            <li><a href="#">Sell online</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Shopping cart</a></li>
                            <li><a href="#">Store builder</a></li>
                        </ul>
                        </div>
                        <div className="col-md-6 col-lg-4">
                        <ul className="list-unstyled">
                            <li><a href="#">Mobile commerce</a></li>
                            <li><a href="#">Dropshipping</a></li>
                            <li><a href="#">Website development</a></li>
                        </ul>
                        </div>
                        <div className="col-md-6 col-lg-4">
                        <ul className="list-unstyled">
                            <li><a href="#">Point of sale</a></li>
                            <li><a href="#">Hardware</a></li>
                            <li><a href="#">Software</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                    <div className="block-5 mb-5">
                        <h3 className="footer-heading mb-4">LIÊN HỆ</h3>
                        <ul className="list-unstyled">
                        <li className="address">97 Man thiện TP. Thủ Đức</li>
                        <li className="phone"><a href="tel://23923929210">083 989 5914</a></li>
                        <li className="email">nguyendinhkhiem12a4@gmail.com</li>
                        </ul>
                    </div>
                    <div className="block-7">
                        <form action="#" method="post">
                        <label htmlFor="email_subscribe" className="footer-heading">Đăng kí</label>
                        <div className="form-group">
                            <input type="text" className="form-control py-4" id="email_subscribe" placeholder="Email" />
                            <input type="submit" className="btn btn-sm btn-primary" defaultValue="Send" />
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                <div className="row pt-5 mt-5 text-center">
                    <div className="col-md-12">
                    <p>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <span target="_blank" className="text-primary">KTTShop</span>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </p>
                    </div>
                </div>
                </div>
          </footer>
    
    );
}

export default Footer;