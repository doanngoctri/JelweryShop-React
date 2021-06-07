import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProductCart } from '../../../Action/UserCart';
import * as action from '../../../Action/UserCart/index';
import Api from  '../../../Axios/index';
import ReactLoading from 'react-loading';
import * as ActionLoading from '../../../Action/Loading/index';
function CartItem(props) {
    const [loading , setLoading] = useState({
      value : false
    });
    const [quantity , setQuantity] = useState({
      state : -1
    })
    const dispatch = useDispatch();
    const token =  JSON.parse(localStorage.getItem("token"));
    const { list } = props;
    const deleteProductCart = (proID, userID)=>{
      dispatch(ActionLoading.displayLoading());
                setTimeout(() => {
                    dispatch(ActionLoading.hiddenLoading());
                }, 300);
          dispatch(action.deleteProductCart(proID,userID));
    }
    console.log(list);
    const element = list.map((value,index)=>{
        return <tr>
                    <td className="product-thumbnail">
                      <img src={value.Image1} alt="Image" className="img-fluid" />
                    </td>
                    <td className="product-name">
                      <h2 className="h5 text-black">{value.Name}</h2>
                    </td>
                    <td>${value.Price - value.Price * value.Discount}</td>
                    <td>
                      <div className="input-group mb-3" style={{maxWidth: '120px'}}>
                        <div className="input-group-prepend">
                          <div className="btn btn-outline-primary js-btn-minus" onClick={e => onClickMinus(value.Quantity-1,value.Id)} >-</div>
                        </div>
                        <input type="text" className="form-control text-center" defaultValue={value.Quantity} value={value.Quantity} placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" readOnly/>
                        <div className="input-group-append">
                          <div className="btn btn-outline-primary js-btn-plus" onClick={e => onClickPlus(value.Quantity+1,value.Id)} >+</div>
                        </div>
                      </div>
                    </td>
                    <td>${value.Price * value.Quantity}</td>
                    <td><div onClick ={e => deleteProductCart(value.Id,token.Id)} className="btn btn-primary height-auto btn-sm">X</div></td>
      </tr>
    })
    
    const onClickMinus = async(quantity , id) =>{
        dispatch(ActionLoading.displayLoading());
        setTimeout(() => {
            dispatch(ActionLoading.hiddenLoading());
        }, 300);
        await Api(`minusCartItem?userId=${token.Id}&productId=${id}`,'GET',null)
              .then(res =>{    
                 if(res.data[0].result){
                   dispatch(action.changeQuantityProdcut(id,quantity));
                 }
              })
       
    }
    const onClickPlus = async(quantity , id) =>{
        dispatch(ActionLoading.displayLoading());
        setTimeout(() => {
            dispatch(ActionLoading.hiddenLoading());
        }, 300);
        await Api(`plusCartItem?userId=${token.Id}&productId=${id}&quantity=1`,'GET',null)
              .then(res =>{
                  if(res.data[0].result === 1){
                     dispatch(action.changeQuantityProdcut(id,quantity))
                  }
                  if(res.data[0].result === -1){
                    alert("Thông báo số lượng tồn không đủ !. Không thể thêm");
                  }
              })
    }
 
    return (
        <div className="row mb-5">
        <form className="col-md-12" method="post">
          <div className="site-blocks-table">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="product-thumbnail">Hình ảnh</th>
                  <th className="product-name">Sản phẩm</th>
                  <th className="product-price">Giá</th>
                  <th className="product-quantity">Số lượng</th>
                  <th className="product-total">Tổng cộng</th>
                  <th className="product-remove">Xóa</th>
                </tr>
              </thead>
              <tbody>
                  {element}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    );
}

export default CartItem;