import React, { useEffect } from 'react';
import {Route , Link} from 'react-router-dom';
import {Prompt} from 'react-router-dom';
import './asset/HeaderCss.css';
import * as action from '../../Action/UserCart/index';
import * as actionType from '../../Const/UserCart/index';
import { useDispatch, useSelector } from 'react-redux';
import * as actionLoading from '../../Action/Loading/index';
function Header(props) {
    const cartUser = useSelector(state => state.UserCart)
    const dispatch = useDispatch();
    const token = JSON.parse(localStorage.getItem("token"));
    
    useEffect(()=>{
        if(token){
            const id = token.Id;
            dispatch(action.fecthUserCart(id));
        }
        else{
            dispatch({
                type : actionType.DELETE_CART
            });
        }
      
    },[])
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
        dispatch(actionLoading.displayLoading());
        setTimeout(() => {
            dispatch(actionLoading.hiddenLoading());
        }, 1000);
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
                    <Link to="/cart" className="icons-btn d-inline-block bag">
                        <span className="icon-shopping-bag"></span>
                        <span className="number">{cartUser.length}</span>
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
                    <Link to="/" exact className="js-logo-clone">KTTShop</Link>
                </div>
                </div>
                <div className="main-nav d-none d-lg-block">
                <nav className="site-navigation text-right text-md-center" role="navigation">
                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                    <MenuLink label="TRANG CHỦ" to="/" activeOnLyWhenExact={true}></MenuLink>
                    <MenuLink label="CỬA HÀNG" to="/shop" activeOnLyWhenExact={true}></MenuLink>
                    <MenuLink label="ĐƠN HÀNG" to="/order" activeOnLyWhenExact={false}></MenuLink>
                    <MenuLink label="THÔNG TIN" to="/about" activeOnLyWhenExact={false}></MenuLink>
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