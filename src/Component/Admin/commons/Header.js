import React, { useEffect } from 'react';
import {Route , Link} from 'react-router-dom';
import './asset/HeaderCss.css';
 import * as action from '../../../Action/AdminOrder/index';
import { useDispatch, useSelector } from 'react-redux';
function Header(props) {
    const token = JSON.parse(localStorage.getItem("token"));
    const dispatch = useDispatch();
    var listOrderAdmin = useSelector(state => state.AdminOrder);
    if(listOrderAdmin){
        listOrderAdmin = listOrderAdmin.filter(value =>{
            return value.StatusId === 1;
        })
    }
    useEffect(()=>{     
        if(token) dispatch(action.adminFetchAllOrder());
    },[])
    console.log(listOrderAdmin);
    const MenuLink  = ({label , to , activeOnLyWhenExact}) =>{
        return(
          <Route path ={to} exact ={activeOnLyWhenExact} children ={({match})=>{
                var active = match ? 'active' : '';
                return  <li className ={active}>
                    <Link to={to} className ='my-link'>{label}</Link>
              </li>
            }
          }>
    
          </Route>
        )
    }

    const onClick = ()=>{
        if(confirm("Bạn có chắc chắn muốn đăng xuất !")){  //eslint-disable-line
            localStorage.removeItem("token");
        };
       
      
    }
   
    const element = () =>{
       
        var element = "";
        if(token){
            element =  <div className="icons">
                 <div className="icons__avatar d-flex align-items-center "  style={{marginRight: "10px"}}>
                    <span className="avatar__circle">
                        <i class="fas fa-user-ninja avatar__icon"></i>
                    </span>
                    <span className="avatar__name">
                        {token.Name}
                        <ul className="avatar__list">
                          
                            <li className="avatar__item"> 
                                <Link to="/info" className="avatar__link">Thông tin cá nhân</Link>
                            </li>
                            <li className="avatar__item"> 
                                <Link to="/changepassword" className="avatar__link">Thay đổi mật khẩu</Link>
                            </li>
                            <li className="avatar__item"> 
                                <Link to="/" className="avatar__link" onClick={onClick}>Đăng xuất</Link>
                            </li>
                        </ul>
                    </span>
                     <Link to="/admin/order" className="icons-btn d-inline-block bag">
                        <span className="icon-shopping-bag"></span>
                        <span className="number">{listOrderAdmin.length}</span>
                   </Link> 
                <a href="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span class="icon-menu"></span></a>
                </div>  
            </div>
        }
        else{
            element = 
            <div className="icons">
                    <Link to="/signin" className="d-inline-block" style={{marginRight: "10px"}}>Đăng nhập</Link>
                    <Link to="/signup" className="d-inline-block" style={{marginRight: "5px"}}>Đăng ký</Link> 
                    <a href="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span class="icon-menu"></span></a>
            </div>
        }
        return element;
    }
    return (
        <div className="site-navbar bg-white py-2">
            <div className="container">
            <div className="d-flex align-items-center justify-content-between">
                <div className="logo">
                <div className="site-logo">
                    <Link to="/admin" exact className="js-logo-clone">Admin</Link>
                </div>
                </div>
                <div className="main-nav d-none d-lg-block">
                <nav className="site-navigation text-right text-md-center" role="navigation">
                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                    <MenuLink label="SẢN PHẨM" to="/admin" activeOnLyWhenExact={true}></MenuLink>
                    <MenuLink label="QUẢNG CÁO" to="/admin/advens" activeOnLyWhenExact={true}></MenuLink>
                    <MenuLink label="ĐƠN HÀNG" to="/admin/order" activeOnLyWhenExact={true}></MenuLink>
                    <MenuLink label="THỐNG KÊ" to="/admin/tk" activeOnLyWhenExact={false}></MenuLink>
                    {/* <MenuLink label="tài khoản " to="/admin/user" activeOnLyWhenExact={false}></MenuLink> */}
                    {/* <MenuLink label="Thông tin" to="/about" activeOnLyWhenExact={false}></MenuLink> */}
                    </ul>
                </nav>
                </div>
                    {element()}
            </div>
            </div>
          
      </div>
    );
}

export default Header;