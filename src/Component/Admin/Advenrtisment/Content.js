import React from 'react';
import { Redirect } from 'react-router';

function Content(props) {
    const {list} = props;
    const deleteAdvens = (id)=>{
        props.deleteAdvens(id);
    }
    const ele = list.map((value,index)=>{
        return   <tr > 
                         <td className="product-thumbnail">{value.Id}</td>
                        <td className="product-name">{value.Name}</td>
                        <td style={{width : '10%'}} >
                            <div style={{width : "100%"}}>
                               <img src={value.Image1} style={{width : '100%'}}></img>
                            </div>
                          </td>
                        <td>{value.Price}</td>
                        <td>{value.Size}</td>
                        <td>
                            <div style={{
                              backgroundColor : '#ee4266',
                              borderRadius : '5px',
                              padding : '5px 0',
                              cursor : 'pointer',
                              color : '#fff'
                            }}
                            onClick = {e => deleteAdvens(value.Id)}
                            >
                                Xóa quảng cáo
                            </div>
                        </td>
      
            </tr>
    })
    return (
        <div className="row mb-5">
        <form className="col-md-12" method="post">
          <div className="site-blocks-table">
            <table className="table table-bordered">
              <thead>
                <tr> 
                  <th >Mã sản phẩm</th>
                  <th className="product-name">Tên sản phẩm</th>
                  <th className="product-thumbnail">Hình ảnh</th>
                  <th >Giá</th>
                  <th >Kích thước</th>
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