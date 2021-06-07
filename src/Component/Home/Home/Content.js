import React from 'react';
import {Link} from 'react-router-dom'
import Item from './Item';
function Content(props) {
    const listProduct = props.list;
    const element = listProduct.map((value,index)=>{
       if(value.Display){ 
             return <Item
                  key ={index}
                  color = {value.Color}
                  desc = {value.Description}
                  discount ={value.Discount}
                  image1 = {value.Image1}
                  image2 = {value.Image2}
                  image3 = {value.Image3}
                  info = {value.Information}
                  name = {value.Name}
                  price = {value.Price}
                  id = {value.Id}
                  size ={value.Size}
                  stock ={value.Stock}
                  progroupid ={value.ProGroupId}

                >
                </Item>
           }
    });
    return (
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="title-section mb-5 col-12">
              <h2 className="text-uppercase">Sản phẩm phổ biến</h2>
            </div>
          </div>
          <div className="row">
                {element}
          </div>
        </div>
      </div>
    );
}

export default Content;