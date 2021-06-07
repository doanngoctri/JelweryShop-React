import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import Header from '../../Component/Admin/commons/Header';
import Footer from '../../Component/Admin/commons/Footer';
import Content from '../../Component/Admin/AdminOrderDetailContent/Content';
import Totals from '../../Component/Admin/AdminOrderDetailContent/Totals';
import Voucher from '../../Component/Admin/AdminOrderDetailContent/Voucher';
import Api from '../../Axios/index';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../Action/Loading/index';
import { Link } from 'react-router-dom';
function OderDetail(props) {
    const list = useSelector(state => state.OrderDetail)
    const dispatch = useDispatch();
    const match = useRouteMatch();
    console.log(match);
    useEffect(()=>{
        const slug = match.params.slug;
        dispatch(action.displayLoading());
        Api(`orderItemOfOrderDetail?orderId=${slug}`)
            .then(res =>{
                dispatch({
                    type : 'FECTH_ALL_ORDER_DETAIL',
                    data : res.data
                })
                dispatch(action.hiddenLoading());
            })

    },[])
    var totals = list.reduce((sum , value)=>{
        return sum += value.Quantity * value.Price;
    } , 0)
    return (
        <div className="site-wrap">
        <Header></Header>
         <div className="bg-light py-3">
         <div className="container">
             <div className="row">
             <div className="col-md-12 mb-0"><Link to="/">Trang chủ</Link> <span className="mx-2 mb-0">/</span> <Link to="/order">Đơn hàng</Link> <span className="mx-2 mb-0">/</span><strong className="text-black">`Chi tiết đơn hàng </strong></div>
             </div>
         </div>
         </div>
         <div className="site-section">
         <div className="container">
             {/* <div className="row mb-5">
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
             </div> */}
             {/* eleement */}
             {list.length === 0 ? <h3>Không đơn hàng này  <Link to="/">Quay về trang chủ</Link> !</h3> :<div>
                        <Content list={list}></Content>
                        <div className="row">
                            <Voucher></Voucher>
                            <Totals>{totals}</Totals>
                            </div>
                </div>
                }
         </div>
         </div>
         <Footer></Footer>
   </div>
   
   
    );
}

export default OderDetail;