import React from 'react';
import { Link } from 'react-router-dom';
import '../../../images/style.css';
function Item(props) {
    const {desc , discount , image1 , image2, image3 , info , name , price , id , size , stock , progroupid} = props
    return (
        <div className="col-lg-4 col-md-4 item-entry mb-4">
        <div id="contain" style={{   
                      boxShadow: '0 0.0625rem 0.125rem 0 rgb(0 0 0 / 10%)',
                      transition : 'transform linear 0.1s'
                  }}>
              <Link to={`/shop/${id}`} className="product-item md-height bg-gray d-block">
                  <img src={image1} alt="Image" className="img-fluid" style ={{height : "80%" , width : "100%" , borderRadius : '4px'}} />
              </Link>
              <h2 className="item-title" style={{
                  width : '100%',
                  whiteSpace : 'pre-wrap',
                  overflow: 'hidden', // ẩn các nội dung khi kích thước lớn hơn chiều rộng khối bên ngoài
                  textOverflow: 'ellipsis', //thêm 3 dấu chấm ở cuối
                  WebkitLineClamp : '1',
                  WebkitBoxOrient: 'vertical',
                  display : '-webkit-box'
                  
                  //     webl: 3;// số dòng muốn hiển thị
                  //    -webkit-box-orient: vertical;
                  //     display: -webkit-box;
              }}>
                  <Link to={`shop/${id}`}>{name}</Link>
                  </h2>
              {discount === 0 ? <strong className="item-price">${price}</strong> :  <strong className="item-price">  <del>${price}<span></span></del>  ${price - price*discount}<span></span></strong>}
        </div>
   
       
    </div>
    );
}

export default Item;