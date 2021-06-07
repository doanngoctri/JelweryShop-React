import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Content(props) {
    const {list ,xml} = props;
     list.sort((value1,value2)=>{
         if(value1.BuyingDay > value2.BuyingDay) return -1;
         else if(value1.BuyingDay < value2.BuyingDay) return 1; 
         else return 0;
     })
    const ele = list.map((value,index)=>{
        return   <tr >  <td>{value.Id}</td>
                        <td className="product-thumbnail">{value.Name}</td>
                        <td className="product-name">{value.BuyingDay}</td>
                        <td>{value.Address}</td>
                        <td>{value.Phone}</td>
                        <td>
                           <Link to={`/admin/order/${value.Id}`}>
                               Chi tiết
                           </Link>
                        </td>
                        <td>{value.StatusId === 1 ? 
                              <div style={{
                                backgroundColor : '#ee4266',
                                color  : 'white' ,
                                cursor : 'pointer' ,
                                borderRadius : '2px'}}
                                onClick={e => onClick(value.Id)}
                                >Chưa xác nhận</div> : 
                              <div style={{
                                backgroundColor : 'Green',
                                color  : 'white' ,
                                borderRadius : '2px'
                              }} >Đã xác nhận</div>} 
                        </td>
      
            </tr>
    })
    const onClick = (id) =>{
        props.changeStatus(id);
    }
    return (
        <div className="row mb-5">
        <form className="col-md-12" method="post">
          <div className="site-blocks-table">
            <table className="table table-bordered">
              <thead>
                <tr>    
                    <th className="product-name">Mã đơn hàng</th>   
                    <th className="product-thumbnail">Tên người nhận</th>
                    <th className="product-name">Ngày đặt</th>
                    <th >Địa chỉ nhận hàng</th>
                    <th className="product-quantity">Số điện thoại</th>
                    <th>Đơn hàng</th>
                    <th className="product-total">Trang thái</th>
                </tr>
              </thead>
              <tbody>
                        {ele}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    );
}

export default Content;