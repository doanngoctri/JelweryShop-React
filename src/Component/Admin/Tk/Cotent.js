import React from 'react';

function Content(props) {
    const {list} = props;
 
    const ele = list.map((value,index)=>{
        return   <tr key={index}> 
                        <td className="product-thumbnail">{value.Id}</td>
                        <td className="product-name">{value.Name}</td>
                        <td >
                            <div style={{width : "100%"}}>
                               <img src={value.Image1} style={{width : '100%'}}></img>
                            </div>
                          </td>
                        <td>{value.Size}</td>
                        <td>{value.Quantity}</td>
                        <td>{value.Stock}</td>
                        <td>{value.Display === true ? 'Còn bán' : 'Ngừng bán'}</td>
      
            </tr>
    })
    return (
        <div className="row mb-5">
        <form className="col-md-12" method="post">
          <div className="site-blocks-table">
            <table className="table table-bordered">
              <thead>
                <tr>
                
                  <th >Mã hàng</th>
                  <th className="product-name">Tên sản phẩm</th>
                  <th className="product-thumbnail">Hình ảnh</th>
                  <th >Kích thước</th>
                  <th >Số lượng đã bán</th>
                  <th >Số lượng còn lại</th>
                  <th >Trạng thái</th>
                
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