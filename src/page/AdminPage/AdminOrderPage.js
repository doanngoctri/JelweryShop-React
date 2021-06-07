import React, { useEffect, useState } from 'react';
import Header from './../../Component/Admin/commons/Header';
import Footer from './../../Component/Admin/commons/Footer';
import Content from '../../Component/Admin/Order/Content';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import * as action from '../../Action/AdminOrder/index';
import * as ActionLoading from '../../Action/Loading/index';
import axios from 'axios';
function AdminOrderPage(props) {
    var listAdminOrder = useSelector(state => state.AdminOrder);
    const [filters , setFilters] = useState(1);
    const token = JSON.parse(localStorage.getItem("token"));
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() =>{
        if(token.RoleId === 1){
            history.replace("/");
        }
       
    },[])
    const onChange = (e)=>{
        
        setFilters(e.target.value);
    }
    if(parseInt(filters,10) > 0){
        listAdminOrder = listAdminOrder.filter(value =>{
            return value.StatusId === parseInt(filters,10);
        })  
    }
    const changeStatus = (id) =>{
        dispatch(ActionLoading.displayLoading());
        // setTimeout(() => {
        //     dispatch(ActionLoading.hiddenLoading());
        // }, 300);
        dispatch(action.adminChangeStatus(id));
        
    }
    return (
        <div className="site-wrap">
           <Header></Header>
            <div className="bg-light py-3">
            <div className="container">
                 {/* <div className="row">
                <div className="col-md-12 mb-0"><a href="index.html">Trang chủ</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Đơn đặt hàng</strong></div> 
                </div> */}
            </div>
            </div>
            <div className="site-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12 d-flex"> 
                        <div style={{marginRight : "20px"}}>
                            Lọc
                        </div>
                        <div>
                            <select name="select" value={filters} onChange={onChange}>
                                <option value={0}>Tất cả</option>
                                <option value={1}>Chưa xác nhận</option>
                                <option value={2}>Đã xác nhận</option>
                            </select>
                        </div>
                    </div>
                </div>
                 {listAdminOrder.length === 0 ? <h3>Không có đơn hàng nào được lọc theo yêu cầu </h3> : <Content list = {listAdminOrder} changeStatus={changeStatus}></Content> }
                
            </div>
            </div>
            <Footer></Footer>
      </div>
      
    );
}

export default AdminOrderPage;