import React from 'react';
import {Link} from 'react-router-dom';
function Totals(props) {
    const totals = props.children;
    
    return (
        <div className="col-md-6 pl-5">
        <div className="row justify-content-end">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-12 text-right border-bottom mb-5">
                <h3 className="text-black h4 text-uppercase">Tính tiền</h3>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <span className="text-black">Tổng cộng</span>
              </div>
              <div className="col-md-6 text-right">
                <strong className="text-black">${totals()}</strong>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-6">
                <span className="text-black">Thành tiền</span>
              </div>
              <div className="col-md-6 text-right">
                <strong className="text-black">${totals()}</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Link to="/checkout"className="btn btn-primary btn-lg btn-block" onclick="window.location='checkout.html'">Đặt hàng <i class="fa fa-outdent" aria-hidden="true"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Totals;