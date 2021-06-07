import React, { useEffect, useState } from 'react';
import Header from './../../Component/Admin/commons/Header';
import Footer from './../../Component/Admin/commons/Footer';
import Content from '../../Component/Admin/Product/Content';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import * as action from '../../Action/Product/index'
import axios from 'axios';
import * as ActionLoading from '../../Action/Loading/index';
// import * as action from '../../Action/UserOrder/index'
function AdminProductPage(props) {
    const [option , setOption] = useState([])
    const [filter , setFilter] = useState({
        keyword : '',
        state : 0 ,
        option : 0,
        sale : 0
      
    })
    const token = JSON.parse(localStorage.getItem("token"));
    var listProduct = useSelector(state => state.Product);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() =>{
        if(token.RoleId === 1){
            history.replace("/");
        }
        else{
            dispatch(ActionLoading.displayLoading());
                // setTimeout(() => {
                //     dispatch(ActionLoading.hiddenLoading());
                // }, 300);
            dispatch(action.fetchAllProduct());
            axios.get('http://jewelrystoreservice.somee.com/api/allProductGroups')
            .then(res =>{
                setOption(res.data);
                dispatch(ActionLoading.hiddenLoading());
            })
        }
     },[])

    useEffect(()=>{

    },[])
    console.log(listProduct);

    const onChange = (e) =>{
        setFilter({
            ...filter ,
            [e.target.name] : e.target.value
        })
    }
    if(filter){
        var key = filter.keyword;
        var sta = parseInt(filter.state,10) === 1 ? false : true;
        var options = parseInt(filter.option ,10);
        var sales = parseInt(filter.sale ,10);
        listProduct  = listProduct.filter(value =>{
            return value.Name.toLowerCase().indexOf(key.toLowerCase()) !== -1;
        })
        if(filter.state > 0){

            listProduct = listProduct.filter(value =>{
                return value.Display === sta;
            })
        }
        if(options > 0){
            listProduct = listProduct.filter(value =>{
                return value.ProGroupId === options;
            })
        }
        if(sales > 0){
            listProduct = listProduct.filter(value =>{
                return value.Discount > 0;
            })
        }
        
      
    }
    var ele = option.map(value =>{
        return (
            <option value={value.Id}>{value.Name}</option>
        )
    })
 
    return (
        <div className="site-wrap">
           <Header></Header>
            <div className="bg-light py-3">
            <div className="container">
                {/* <div className="row">
                <div className="col-md-12 mb-0"><Link to="/admin">Danh Sách sản phẩm</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Đơn đặt hàng</strong></div>
                </div> */}
            </div>
            </div>
            <div className="site-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12 d-flex align-items-center" style={{justifyContent : "space-between"}}> 
                        <div style={{marginRight : "20px"}}>
                         
                            <div  style ={{flex : 1}}>
                                <label>TÌM KIẾM</label>
                                <input name="keyword" onChange={onChange} value ={filter.keyword} 
                                    style ={
                                    {
                                        marginLeft : "10px",

                                    }}>
                                </input>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div style={{marginRight : "20px"}}>
                                <label>TRẠNG THÁI</label>
                                    <select name="state" onChange={onChange} value={filter.state}  style ={{marginLeft : "10px"}} >
                                        <option value={0}>Tất cả</option>
                                        <option value={1}>Ngừng bán</option>
                                        <option value={2}>Còn bán</option>
                                    </select> 
                            </div>
                            <div style={{marginRight : "20px"}}>
                                <label>LOẠI</label>
                                <select name="option" onChange={onChange} value={filter.option} style ={{marginLeft : "10px"}} >
                                    <option value={0}>Tất cả</option>
                                    {ele}
                                </select> 
                            </div>
                            <div>
                                <label>GIẢM GIÁ</label>
                                <select name="sale" onChange={onChange} value={filter.sale} style ={{marginLeft : "10px"}} >
                                    <option value={0}>Không</option>
                                    <option value={1}>Có</option>
                                  
                                </select> 
                            </div>
                        </div>
                        <div>
                            <Link style={
                                {
                                    backgroundColor : "#ee4266",
                                    padding : "5px 10px",
                                    borderRadius : "5px",
                                    cursor : "pointer",
                                    color : "#fff" 
                                } 
                            }
                            to="/admin/addproduct"
                            >
                            THÊM SẢN PHẨM</Link>
                        </div>
                    </div>
                </div>
                {/* eleement */}
                {listProduct.length === 0 ? <h3>Không có sản phẩm này !</h3> : <Content list={listProduct}></Content>}
            
            </div>
            </div>
            <Footer></Footer>
      </div>
      
      
    );
}

export default AdminProductPage;