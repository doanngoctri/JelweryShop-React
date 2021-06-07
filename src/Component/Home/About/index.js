import React from 'react';
import Header from './../../commons/Header';
import Footer from './../../commons/Footer';
import {Link} from 'react-router-dom';
import model from '../../../images/model_2.png';
import image from '../../../images/blog_1.jpg';
import person4 from '../../../images/person_4.jpg';
import person3 from '../../../images/person_3.jpg';
import person5 from '../../../images/person_5.jpg';
function index(props) {
    return (
        <div className="site-wrap">
            <Header></Header>
        <div className="site-blocks-cover inner-page" data-aos="fade">
            <div className="container">
            <div className="row">
                <div className="col-md-6 ml-auto order-md-2 align-self-start">
                <div className="site-block-cover-content">
                    <h2 className="sub-title">#New Summer 2021</h2>
                    <h1>Mời bạn đến !</h1>
                    <p><Link to="/shop" className="btn btn-black rounded-0">Đến cửa hàng</Link></p>
                </div>
                </div>
                <div className="col-md-6 order-1 align-self-end">
                <img src={model} alt="Image" className="img-fluid" />
                </div>
            </div>
            </div>
        </div>
        <div className="custom-border-bottom py-3">
            <div className="container">
            <div className="row">
                <div className="col-md-12 mb-0"><a href="index.html">Trang chủ</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">About</strong></div>
            </div>
            </div>
        </div>
        <div className="site-section site-section-sm site-blocks-1 border-0" data-aos="fade">
            <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay>
                <div className="icon mr-4 align-self-start">
                    <span className="icon-truck" />
                </div>
                <div className="text">
                    <h2 className="text-uppercase">Giao hàng nhanh</h2>
                    <p>Cửa hàng có hệ thống vận chuyển chất lượng cao . Được đạo tào bài bản</p>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon mr-4 align-self-start">
                    <span className="icon-refresh2" />
                </div>
                <div className="text">
                    <h2 className="text-uppercase">Đổi trả miễn phí</h2>
                    <p>Có thể đổi trả khi sản phẩm có lỗi hoặc không vừa ý trong vòng 10 ngày</p>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="icon mr-4 align-self-start">
                    <span className="icon-help" />
                </div>
                <div className="text">
                    <h2 className="text-uppercase">Tự vấn khách hàng</h2>
                    <p>Nhân viên thân thiện và có chuyên môn mắt thẩm mĩ biết những sản phẩm phù hợp với những gì bạn muốn</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="site-section custom-border-bottom" data-aos="fade">
            <div className="container">
            <div className="row mb-5">
                <div className="col-md-6">
                <div className="block-16">
                    <figure>
                    <img src={image} alt="Image placeholder" className="img-fluid rounded" />
    
                    </figure>
                </div>
                </div>
                <div className="col-md-1" />
                <div className="col-md-5">
                <div className="site-section-heading pt-3 mb-4">
                    <h2 className="text-black">Bắt đầu như thế nào</h2>
                </div>
                <p>Đến với chúng tôi . Bạn sẽ thấy mọi thứ phù hợp với bạn</p>
                </div>
            </div>
            </div>
        </div>
        <div className="site-section custom-border-bottom" data-aos="fade">
            <div className="container">
            <div className="row justify-content-center mb-5">
                <div className="col-md-7 site-section-heading text-center pt-4">
                <h2>The Team</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4">
                <div className="block-38 text-center">
                    <div className="block-38-img">
                    <div className="block-38-header">
                        <img src={person5} alt="Image placeholder" className="mb-4" />
                        <h3 className="block-38-heading h4">ĐOÀN NGỌC TRÍ</h3>
                        <p className="block-38-subheading">Dev Back-en .NET C#</p>
                    </div>
                    <div className="block-38-body">
                        <p>Ông trùm back-en cân mọi loại ngôn ngữ làm Back-en . Mọi hệ quản trị cơ sở dữ liệu. Và một người sinh ra là để Leader</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-4">
                <div className="block-38 text-center">
                    <div className="block-38-img">
                    <div className="block-38-header">
                        <img src={person4} alt="Image placeholder" className="mb-4" />
                        <h3 className="block-38-heading h4">NGUYỄN ĐÌNH KHIÊM</h3>
                        <p className="block-38-subheading">Dev Front-en</p>
                    </div>
                    <div className="block-38-body">
                        <p>Tui biết một tý ReactJs để viết trang này thôi à. chứ hông biết gì hết !!</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-4">
                <div className="block-38 text-center">
                    <div className="block-38-img">
                    <div className="block-38-header">
                        <img src={person3} alt="Image placeholder" className="mb-4" />
                        <h3 className="block-38-heading h4">BÙI NGỌC TUẤN</h3>
                        <p className="block-38-subheading">Dev Front-en Mobile</p>
                    </div>
                    <div className="block-38-body">
                        <p>Ông hoàng thiết kế layout , có thể cân mọi loại layout . Nếu bạn muốn thiết kế một layout đẹp thì hãy đến với bạn Tuấn</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
            <Footer></Footer>
        </div>

    );
}

export default index;