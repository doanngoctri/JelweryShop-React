import React, { useEffect } from 'react';
import Header from './../../Component/commons/Header';
import Footer from './../../Component/commons/Footer';
import CartItem from '../../Component/Home/Cart/CartItem';
import Voucher from '../../Component/Home/Cart/Voucher';
import Totals from  '../../Component/Home/Cart/Totals';
import { useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
function CartPage(props) {
    const cartList = useSelector(state => state.UserCart)
    const token = JSON.parse(localStorage.getItem("token"))
    const history = useHistory();
    useEffect(()=>{
        if(token.RoleId === 2){
            history.replace("/admin");
        }
    },[])
    const totals = ()=>{
        var res = 0
        if(cartList.length > 0 ){
           for(let i = 0 ; i < cartList.length ; i ++){
               res += cartList[i].Price*cartList[i].Quantity -  cartList[i].Price*cartList[i].Discount*cartList[i].Quantity;
           }
        }
        return res;
    }
    return (
        <div className="site-wrap">
           <Header></Header>
            <div className="bg-light py-3">
            <div className="container">
                <div className="row">
                <div className="col-md-12 mb-0"><Link to="/">Trang chủ</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Giỏ hàng</strong></div>
                </div>
            </div>
            </div>
            <div className="site-section">
            <div className="container">
                {cartList.length === 0 ? <h3>Không có sản phẩm trong giỏ hàng. <Link to="/shop">Quay về cửa hàng !</Link></h3> : <div> <CartItem list={cartList}></CartItem>
                <div className="row">
                   <Voucher></Voucher> 
                   <Totals >{totals}</Totals>
                </div>
                
            </div>}
               
            </div>
            </div>
            <Footer></Footer>
      </div>
      
    );
}

export default CartPage;