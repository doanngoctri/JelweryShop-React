import React from 'react';

function Content(props) {
    const {list} = props;
    // list.sort((value1,value2)=>{
    //     if(value1.BuyingDay > value2.BuyingDay) return -1;
    //     else if(value1.BuyingDay < value2.BuyingDay) return 1; 
    //     else return 0;
    // })
    // const ele = list.map((value,index)=>{
    //     return   <tr > 
    //                     <td className="product-thumbnail">{value.Name}</td>
    //                     <td className="product-name">{value.BuyingDay}</td>
    //                     <td>{value.Address}</td>
    //                     <td>{value.Phone}</td>
    //                     <td>{value.StatusId === 1 ? 'Chưa xác nhận' : 'Đã xác nhận'}</td>
      
    //         </tr>
    // })
    return (
        <div className="row mb-5">
        <form className="col-md-12" method="post">
          <div className="site-blocks-table">
            <table className="table table-bordered">
              <thead>
                <tr>
                 
                  <th className="product-thumbnail">Mã</th>
                  <th className="product-name">Họ và tên</th>
                  <th className="product-price">Email</th>
                  <th className="product-quantity">Số điện thoại</th>
                  <th className="product-total">Địa chỉ</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                        {/* {ele} */}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    );
}

export default Content;