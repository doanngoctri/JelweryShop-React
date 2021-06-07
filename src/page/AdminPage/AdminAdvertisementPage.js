import React, { useEffect, useState } from 'react';
import Header from './../../Component/Admin/commons/Header';
import Footer from './../../Component/Admin/commons/Footer';
import Content from '../../Component/Admin/Advenrtisment/Content'
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import * as action from '../../Action/AdminAdvens/index';
import * as actionProduct from '../../Action/Product/index';
import AdminAdvens from '../../Component/Auth/AddAdvens';
import * as actionType from '../../Const/AdminAdvens/index';
import * as ActionLoading from '../../Action/Loading/index';
import axios from 'axios';
function AdminAdvenrtismentPage(props) {
    var listId = [];
   
    const token = JSON.parse(localStorage.getItem("token"));
    const listAdvens = useSelector(state =>state.AdminAdvens);
    const listProduct = useSelector(state =>state.Product)
    const dispatch = useDispatch();
    const history = useHistory();
    const [display, setDisplay] = useState(0);
    var listPro  = listProduct;
    useEffect(() =>{
        if(token.RoleId === 1){
            history.replace("/");
        }
        else{
            dispatch(ActionLoading.displayLoading());
            setTimeout(() => {
                dispatch(ActionLoading.hiddenLoading());
            }, 300);
            dispatch(action.adminFetchAllAdvens());
            dispatch(actionProduct.fetchAllProduct())
        }
     },[display]);
    
    var Click = ()=>{
        setDisplay(1);
    }
    if(listPro.length > 0){
        listPro = listPro.filter(value =>{
            return value.Display === true;
        })
    }

    if(listAdvens.length > 0){
            for(let i = 0 ; i < listAdvens.length ; i++){
                for(let j = 0 ; j < listProduct.length ; j++){
                        if(listAdvens[i].Id === listProduct[j].Id){
                            listId.push(listProduct[j].Id);
                           
                        }
                }
            }
    }  
    var findIndex = (arr , id) =>{
        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i].Id === id) return i;
        }
        return -1;
    }

    if(listId.length > 0){
        for(let i = 0 ; i < listId.length ; i++)
        {
            var index = findIndex(listPro , listId[i])
            if(index > -1){
                listPro.splice(index,1);
            } 
        }
    }

    const Back =()=>{
        setDisplay(0);
    }
    const deleteAdvens = (id)=>{
       dispatch(ActionLoading.displayLoading());
       dispatch(action.fetchDeleteAdvens(id));
    

    }
    const addAdvens = (value)=>{
        dispatch(ActionLoading.displayLoading());  
        setTimeout(()=>{
            alert("Thêm thành công");
            setDisplay(0);
        },600)
        dispatch(action.adminFetchAdminAdvens(value));
     
    }
    console.log(listPro);
    console.log(listAdvens);
    var ele = (
        <div className="site-wrap">
        <Header></Header>
         <div className="bg-light py-3">
         <div className="container">
            
         </div>
         </div>
         <div className="site-section">
         <div className="container">
             <div className="row mb-5">
                 <div className="col-md-12 d-flex"> 
                     <div style={{marginRight : "20px"}}>
                         <div onClick={Click}

                             style={
                                 {
                                     backgroundColor : "#ee4266",
                                     padding : "5px 10px",
                                     borderRadius : "5px",
                                     cursor : "pointer", 
                                     color : "#fff"
                                 } 
                             }
                            
                             >
                             THÊM QUẢNG CÁO</div>
                     </div>
                 </div>
             </div>
             {listAdvens.length === 0 ? "Chưa có sản phẩm quảng cáo nào !" : <Content list={listAdvens} deleteAdvens={deleteAdvens}></Content>}
         
         </div>
         </div>
         <Footer></Footer>
     </div>
    );
    return (
        <div>
           {display === 0 ? ele : <AdminAdvens list={listPro} Back={Back} addAdvens={addAdvens}></AdminAdvens>}
    </div>
    );
}

export default AdminAdvenrtismentPage;