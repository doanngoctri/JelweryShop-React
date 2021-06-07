import React from 'react';

function Content(props) {
    const { list } = props;
    const ele = list.map((value,index)=>{
        return   <tr key={index}> 
                       <td className="product-thumbnail">{value.Id}</td>
                       <td className="product-name">{value.Name}</td>
                       <td className="product-thumbnail" style={{width :"10%"}}>
                          <img src={value.Image1} alt="Image" className="img-fluid" ></img>
                        </td>
                       <td>${value.Price}</td>
                       <td>
                          {value.Quantity}
                        </td>
                        <td>
                            ${value.Price * value.Quantity}
                        </td>
                      
            
      
            </tr>
      }
    );
    return (
        <div className="row mb-5">
            <form className="col-md-12" method="post">
            <div className="site-blocks-table">
                <table className="table table-bordered">
                <thead>
                    <tr>
                    
                    <th className="product-thumbnail">Mã sản phẩm</th>
                    <th className="product-price">Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th className="product-total">Giá</th>
                    <th >Số lượng</th>
                    <th>Thành tiền</th>
                    {/* <th className="product-total">Chi tiết</th> */}
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