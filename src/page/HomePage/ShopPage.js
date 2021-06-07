import React, { useEffect, useState } from 'react';
import Header from './../../Component/commons/Header';
import Footer from './../../Component/commons/Footer';
import Banner from './../../Component/Home/Shop/Banner';
import Content from './../../Component/Home/Shop/Content';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as action from '../../Action/Product/index';
import { useSelector } from 'react-redux';
import axios from 'axios';
import * as ActionLoading from '../../Action/Loading/index';
function ShopPage(props) {
    const [option , setOption] = useState([]);
    const listProduct = useSelector(state => state.Product);
    const dispatch = useDispatch();
    const token = JSON.parse(localStorage.getItem("token"));
    const history = useHistory();
    useEffect(()=>{
      if(token){
        if(token.RoleId === 2){
            history.replace("/admin");
        }
        else{
          dispatch(ActionLoading.displayLoading());
          setTimeout(() => {
                    dispatch(ActionLoading.hiddenLoading());
          }, 300);
          dispatch(action.fetchAllProduct())
        }
    }
    else{
      dispatch(ActionLoading.displayLoading());
      setTimeout(() => {
                dispatch(ActionLoading.hiddenLoading());
      }, 300);
      dispatch(action.fetchAllProduct())
    }
       
    },[]);

    useEffect(()=>{
      axios.get('http://jewelrystoreservice.somee.com/api/allProductGroups')
      .then(res =>{
          setOption(res.data);
      })
    }, [])
    return (
    <div className="site-wrap">
        <Header></Header>
        <Banner></Banner>
        <div className="custom-border-bottom py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0"><Link to="/">Trang chủ</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Cửa hàng</strong></div>
            </div>
          </div>
        </div>
        <Content list={listProduct} option={option}></Content>
        <Footer></Footer>
      </div> 
    );
}

export default ShopPage;