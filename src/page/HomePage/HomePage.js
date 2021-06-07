import React, { useEffect, useState } from 'react';
import Header from '../../Component/commons/Header';
import Footer from '../../Component/commons/Footer';
import Banner from '../../Component/Home/Home/Banner';
import Content from '../../Component/Home/Home/Content';
import Api from '../../Axios';
import * as URL from '../../Const/URL';
import { useHistory } from 'react-router';
import * as ActionLoading from '../../Action/Loading/index';
import { useDispatch } from 'react-redux';
function HomePage(props) {
    const [product , setProduct] = useState([]);
    const token = JSON.parse(localStorage.getItem("token"));
    const history = useHistory();
    const dispatch = useDispatch();
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
                Api('allAdvertisments','GET',null)
                 .then(res => {
                setProduct(res.data)
                
            });
            }
        }
        else{
            dispatch(ActionLoading.displayLoading());
            setTimeout(() => {
                dispatch(ActionLoading.hiddenLoading());
            }, 300)
            Api('allAdvertisments','GET',null)
            .then(res => {
                setProduct(res.data)
            });
        }

      
    },[1]);

    return (
    <div className="App">
        <div className="site-wrap">
            <Header></Header>
            <Banner></Banner>
            <Content list={product}></Content>
            <Footer></Footer>
        </div>
    </div>
    );
}

export default HomePage;