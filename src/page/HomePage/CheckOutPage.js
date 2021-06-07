import React, { useEffect } from 'react';
import Header from './../../Component/commons/Header';
import Footer from './../../Component/commons/Footer';
import Content from '../../Component/Home/CheckOut/Content';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
function CheckOutPage(props) {
    const listCart = useSelector(state => state.UserCart);
    const history = props.match;
    const token = JSON.parse(localStorage.getItem("token"))
    const his = useHistory();
    useEffect(()=>{
        if(token.RoleId === 2){
            his.replace("/admin");
        }
    },[])
    return (
        <div className="site-wrap">
                <Header></Header>
                <Content listCart ={listCart} history={history}></Content>
                <Footer></Footer>
        {/*Footer*/}
      </div>
      
    );
}

export default CheckOutPage;