import React, { useEffect, useState } from 'react';
import Header from './../../Component/commons/Header';
import Footer from './../../Component/commons/Footer';
import Product from './../../Component/Home/ShopItem/Product';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../Action/Product/index';
import {useHistory, withRouter} from 'react-router-dom';
function ShopItemPage(props) {
    const  history  = useHistory();
    const productDetail = useSelector(state => state.ProductDetail);
    const dispacth = useDispatch();
    const token = JSON.parse(localStorage.getItem("token"));
    
    useEffect(()=>{
        if(token.RoleId === 2){
            history.replace("/admin")
        }
        else{
            const { match } = props;
            const id = match.params.prodID 
            dispacth(action.getDetail(id,history));
        }
       
     
    },[]);
   
    return (
        <div className="site-wrap">
                <Header></Header>
                <Product productDetail={productDetail}></Product>
                <Footer></Footer>

        </div>
    );
}

export default withRouter(ShopItemPage);