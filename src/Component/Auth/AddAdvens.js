import React from 'react';
import './asset/base.css';
import * as ActionLoading from '../../Action/Loading/index';
import * as action from '../../Action/AdminAdvens/index';
import { useDispatch } from 'react-redux';
function AddAdvens(props) {
  
    const {list} = props;
    console.log(list);
    const addAdvens = (value)=>{
       props.addAdvens(value);
    }
  
    var ele = list.map(value =>{
        return (  <tr > 
                        <td className="product-thumbnail">{value.Id}</td>
                        <td className="product-name">{value.Name}</td>
                        <td style={{width : "100px" , padding : "20px" }}>
                            <div style={{width : "100%"}}>
                            <img src={value.Image1} style={{width : '100%'}}></img>
                            </div>
                        </td>
                        <td style={{minWidth : "20px"}}>
                            ${value.Price}
                        </td>
                        <td>{value.Size} </td>
                        <td>{value.Stock} </td>
                        <td>
                            <div style={{
                                backgroundColor : 'green',
                                borderRadius : '5px',
                                color : 'white',
                                marginLeft : '5px',
                                marginRight : '5px',
                                cursor : 'pointer'
                              }}
                              onClick={e => addAdvens(value)}
                              >   
                                Thêm 
                            </div>
                        </td>
             </tr>
            )
    })
    const Back =()=>{
        props.Back();
    }
    return (
            <div className="modal_footer">
                <div className="modal__overlay">
                </div>
                <div className="modal__body" >
                    <div className="modal__inner"  style={{padding : '20px'}}>
                        {list.length === 0 ? "SẢN PHẨM ĐÃ ĐƯỢC QUẢNG CÁO HẾT " : 
                            <div>
                                 <div style={{color : "#666" , marginBottom : '10px'}}>
                                    THÔNG TIN SẢN PHẨM CHƯA CÓ QUẢNG CÁO
                                </div>
                                <table>
                                    <thead>
                                        <tr > 
                                            <th >Mã sản phẩm</th>
                                            <th className="product-name">Tên sản phẩm</th>
                                            <th className="product-thumbnail" >Hình ảnh</th>
                                            <th style={{padding : '20px'}}>Giá</th>
                                            <th style={{padding : '20px'}}>Kích thước</th>
                                            <th style={{padding : '20px'}}>Số lượng</th>
                                            <th style={{padding : '30px'}}>Chi tiết</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ele}
                                    </tbody> 
                                </table>
                            </div>
                        }
                          <div style={{
                              display : 'flex',
                              justifyContent : 'flex-end'
                          }}>
                                <div onClick={Back}to="/admin" className="button btn-back" style={{marginTop : '20px'}}>Trở lại</div>
                                <div>
                          </div>
                    
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default AddAdvens;