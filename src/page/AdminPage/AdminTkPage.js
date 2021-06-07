import React, { useEffect, useState } from 'react';
import Header from './../../Component/Admin/commons/Header';
import Footer from './../../Component/Admin/commons/Footer';
import Content from '../../Component/Admin/Tk/Cotent';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import * as action from '../../Action/UserOrder/index'
import Api from '../../Axios';
import * as ActionLoading from '../../Action/Loading/index';
function AdminTkPage(props) {
  
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    const token = JSON.parse(localStorage.getItem("token"));
    const [list , setList] = useState([])
    const [filters , setFilters] = useState(0);
    const [date , setDate] = useState({
        maxDate :  yyyy+"-"+mm+'-'+dd,
        minDate :  '2020-01-01'
    })  // Ngày hiện thại

    const [statistic , setStatistic] = useState({
        fromday :  '2020-01-01',
        today :   yyyy+'-'+mm+'-'+dd
    })
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() =>{
        if(token.RoleId === 1){
            history.replace("/");
        }
        
    },[])
    useEffect(()=>{
        if(filters === 0){
            dispatch(ActionLoading.displayLoading());
            setTimeout(() => {
                dispatch(ActionLoading.hiddenLoading());
            }, 300);
            Api('Statistic','GET',null)
            .then(res =>{
                setList(res.data);
            })
        }
        else{
            dispatch(ActionLoading.displayLoading());
            setTimeout(() => {
                dispatch(ActionLoading.hiddenLoading());
            }, 300);
            Api(`Statistic?from=${statistic.fromday}&to=${statistic.today}`,'GET',null)
            .then(res =>{
               setList(res.data);
            })
        }

    },[filters])
    const onChange = (e) =>{
        setFilters(parseInt(e.target.value,10));
    } 
    const onChangeDate = (e) =>{
        setStatistic({
            ...statistic ,
            [e.target.name] : e.target.value
        })
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        dispatch(ActionLoading.displayLoading());
        setTimeout(() => {
            dispatch(ActionLoading.hiddenLoading());
        }, 300);
        Api(`Statistic?from=${statistic.fromday}&to=${statistic.today}`,'GET',null)
        .then(res =>{
           setList(res.data);
        })
    }
  
    var ele = (  <div style={{marginLeft : "20px"}}>
                <form onSubmit={onSubmit}>
                    <div style={{marginRight : "20px" }} className="d-flex">
                        <div>
                            <labe>TỪ NGÀY</labe>
                            <input type="date" style={{marginLeft : "20px"}} value={statistic.fromday} name="fromday" onChange={onChangeDate} placeholder="yyyy-mm-dd" defaultValue={date.minDate} min={date.minDate} max={statistic.today} required></input>
                        </div>
                        <div style={{marginLeft : "20px"}}>
                            <labe>ĐẾN NGÀY</labe>
                            <input type="date" style={{marginLeft : "20px"}}  value={statistic.today} name="today" onChange={onChangeDate} placeholder="yyyy-mm-dd" defaultValue={date.maxDate} min={statistic.fromday} max={date.maxDate} required></input>
                        </div>
                        <div style={{marginLeft : "50px"}}>
                            <button style={
                                {
                                    backgroundColor : "#ccc",
                                    padding : "5px 10px",
                                    borderRadius : "5px",
                                    cursor : "pointer", 
                                    minWidth : "120px",
                                    textAlign : "center"
                                } 
                            }
                            type="submit"
                            >
                            THỐNG KÊ</button>
                        </div>
                    </div>
                </form>
            </div>
        )
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
                    <div className="col-md-12 d-flex justify-content-between"> 
                        <div>
                            <label>THỐNG KÊ</label>
                            <select name="select" value={filters} onChange={onChange} style={{marginLeft : "20px"}}>
                                <option value={0}>TẤT CẢ</option>
                                <option value={1}>THEO NGÀY</option>
                            </select>
                        </div>
                      {filters === 0 ?  " " : ele }
                    </div>
                </div>
             {list.length === 0 ? <h3>Không có mặt hàng được bán vào ngày này</h3> : <Content list ={list}></Content>} 
              
            </div>
            </div>
            <Footer></Footer>
      </div>
      
    );
}

export default AdminTkPage;