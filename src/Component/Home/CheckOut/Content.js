import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Api from '../../../Axios/index';
import * as actionType from '../../../Const/UserCart/index';
import * as ActionLoading from '../../../Action/Loading/index';
function Content(props) {
    const [form , setForm] = useState({
        name : '',
        address : '',
        email : '',
        phone : '',
        notes : ''
    })
    const [rec , setRec] = useState(0);
    const dispatch = useDispatch();
    const token =  JSON.parse(localStorage.getItem("token"));
    const { listCart } = props;
    const element = listCart.map((value,index)=>{
            return  <tr>
                        <td>{value.Name}<strong className="mx-2">x</strong>{value.Quantity}</td>
                        <td>${value.Price*value.Quantity - value.Price*value.Discount*value.Quantity}</td>
                 </tr>
    })
    const totals = ()=>{
        var res = 0
        if(listCart.length > 0 ){
           for(let i = 0 ; i < listCart.length ; i ++){
               res += listCart[i].Price*listCart[i].Quantity -  listCart[i].Price*listCart[i].Discount*listCart[i].Quantity;
           }
        }
        return res;
    }
    const onChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [name] : value
        })
    }
    const subMit = async (e) =>{
        dispatch(ActionLoading.displayLoading());
        setTimeout(() => {
            dispatch(ActionLoading.hiddenLoading());
        }, 300);
        e.preventDefault();
        await Api(`checkOut?userId=${token.Id}&name=${form.name}&phone=${form.phone}&email=${form.email}&address=${form.address}&note=${form.notes}`,'GET',null)
             .then(res =>{
                    console.log(res);
                    if(res.data[0].result === 1){
                        setRec(1);
                        dispatch({
                            type : actionType.DELETE_CART
                            
                        })
                    }
                    else {
                        alert("Thông báo ! . Số lượng trong kho không đủ . Đặt đơn hàng không thành công.")
                    }
             }) 
        
    }
    var ele  = <h3>Bạn không có đơn sản phẩm trong đơn hàng.  <Link to="/shop">Quay về cửa hàng</Link></h3>
    if(listCart.length > 0){
        ele = <div className="row">
        <div className="col-md-6 mb-5 mb-md-0">
        <h2 className="h3 mb-3 text-black">Thông tin đơn đặt</h2>
            <div className="p-3 p-lg-5 border">
                <form onSubmit={subMit}>
                        <div className="form-group row">
                        <div className="col-md-12">
                            <label htmlFor="c_fname" className="text-black">Họ và tên<span className="text-danger">*</span></label>
                            <input type="text" onChange={onChange} value={form.name} className="form-control" id="c_fname" name="name" required/>
                        </div>
                        </div>
                        <div className="form-group row">
                        <div className="col-md-12">
                            <label htmlFor="c_address" className="text-black">Địa chỉ <span className="text-danger">*</span></label>
                            <input type="text" onChange={onChange} value={form.address} className="form-control" id="c_address" name="address" placeholder="" required/>
                        </div>
                        </div>
                        <div className="form-group row ">
                        <div className="col-md-12">
                            <label htmlFor="c_email_address" className="text-black">Email <span className="text-danger">*</span></label>
                            <input type="email" onChange={onChange} value={form.email}  className="form-control" id="c_email_address" name="email" required />
                        </div>
                        </div>
                        <div className="form-group row ">
                            <div className="col-md-12">
                                <label htmlFor="c_phone" className="text-black">Số điện thoại <span className="text-danger">*</span></label>
                                <input type="tel" onChange={onChange} value={form.phone} className="form-control" id="c_phone" name="phone" placeholder=""  required pattern="[0-9]{10}" />
                            </div>
                        </div>  
                        <div className="form-group">
                        <label htmlFor="c_order_notes" className="text-black">Ghi chú </label>
                        <textarea name="notes" onChange={onChange}  id="c_order_notes" cols={30} rows={5} className="form-control" placeholder="Viết ghi chú của bạn ....." defaultValue={""} />
                        </div>
                        <div className="form-group">
                            <button  type="submit" className="btn btn-primary btn-lg btn-block" onclick="window.location='thankyou.html'">Thanh toán</button>
                        </div>
                         {rec === 1 ? <Redirect to="/thank"></Redirect> : ""}
                    </form>
            </div>
        </div>
        <div className="col-md-6">
            <div className="row mb-5">
                <div className="col-md-12">
                <h2 className="h3 mb-3 text-black">Đơn hàng của bạn</h2>
                <div className="p-3 p-lg-5 border">
                    <table className="table site-block-order-table mb-5">
                    <thead>
                        <tr>
                            <th>Sản phẩm </th>
                            <th>Tổng cộng</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                            {element}
                        <tr>
                        <td className="text-black font-weight-bold"><strong>Tổng đơn hàng</strong></td>
                        <td className="text-black font-weight-bold"><strong>${totals()}</strong></td>
                        </tr>
                    </tbody>
                    </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    }

    useEffect(()=>{
        setForm({
            name : token.Name,
            address : token.Address,
            email : token.Email,
            phone : token.Phone,
            notes : ''

        })
    },[])
    return (
        <div>
            <div className="site-section">
                <div className="container">
                        {ele}
            </div>  
        </div>
    </div>
    );
}

export default Content;