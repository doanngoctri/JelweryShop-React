import React, { useEffect, useState } from 'react';
import Header from './../../Component/commons/Header';
import Footer from './../../Component/commons/Footer';
import Content from '../../Component/Home/Order/Content';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import * as action from '../../Action/UserOrder/index';
import * as ActionLoading from '../../Action/Loading/index';
function CartPage(props) {
    const [filters , setFilters] = useState(0);
    const token = JSON.parse(localStorage.getItem("token"));
    const listOrder = useSelector(state => state.OrderCart);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() =>{
        if(token.RoleId === 2){
            history.replace("/admin");
        }
        else{
            dispatch(ActionLoading.displayLoading());
                setTimeout(() => {
                    dispatch(ActionLoading.hiddenLoading());
                }, 300);
            dispatch(action.fetchAllOrder(token.Id));
        }
        
    },[])
    console.log(listOrder);
    const onChange = (e) =>{
      
        setFilters(e.target.value)
       
        
    } 
    console.log(filters);
    // var res = listOrder.filter(value =>{
    //     return value.StatusId === 2;
       
    // });
    const status = parseInt(filters,10);
    var res = listOrder;
    
    if( status > 0) {
        res = listOrder.filter(value =>{
            return value.StatusId === status;
        })
    }
   
    return (
        <div className="site-wrap">
           <Header></Header>
            <div className="bg-light py-3">
            <div className="container">
                <div className="row">
                <div className="col-md-12 mb-0"><a href="index.html">Trang chủ</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Đơn đặt hàng</strong></div>
                </div>
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
                            <select name="select" value={filters} onChange ={onChange}>
                                <option value={0}>Tất cả</option>
                                <option value={1}>Chưa xác nhận</option>
                                <option value={2}>Đã xác nhận</option>
                            </select>
                        </div>
                    </div>
                </div>
                {listOrder.length === 0 ? <h3>Không có đơn hàng nào được đặt. <Link to="/shop">Quay về cửa hàng !</Link></h3> : <Content list ={res}></Content>
               }
               
            </div>
            </div>
            <Footer></Footer>
      </div>
      
    );
}

export default CartPage;