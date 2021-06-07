import React from 'react';
import {Link} from 'react-router-dom';
function Content(props) {
    return (
       <div>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 mb-0"><a href="index.html">Trang chủ</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Cám ơn</strong></div>
                    </div>
                </div>
                </div>  
                <div className="site-section">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 text-center">
                        <span className="icon-check_circle display-3 text-success" />
                        <h2 className="display-3 text-black">Thank you!</h2>
                        <p className="lead mb-5">Đơn hàng của bạn đã thanh toán thành công.</p>
                        <p><Link to="/shop" className="btn btn-sm height-auto px-4 py-3 btn-primary">Quay trở lại cửa hàng</Link></p>
                    </div>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default Content;