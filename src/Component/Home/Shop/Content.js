import React, { useState } from 'react';
import TopSort from './ContentChild/TopSort';
import Item from './ContentChild/Item';
import Filter from './ContentChild/Filter';
function Content(props) {
    var {option} = props
    const [options , setOptions] = useState(0);
    const [sale , setSale] = useState(0);
    const [search , setSearch] = useState('');  
    const listProduct = props.list;
    var list = listProduct;
    
    const onChange = (e)=>{
        setSearch(e.target.value.toLowerCase());
      
    }   
    list = list.filter(value =>{
        return value.Name.toLowerCase().indexOf(search) !== -1;
    })
    
    

   const onChangeOption = (e)=>{
      setOptions(parseInt(e.target.value,10));
   }
   const onChangeSale =(e)=>{
      setSale(parseInt(e.target.value,10));
   }
   var ele =  option.map(value =>{
     return <option value={value.Id}>{value.Name}</option>
   })
   list = list.filter(value=>{
    return value.Display === true;
   })
   if(options > 0){
      list =  list.filter(value =>{
        return value.ProGroupId === options;
      })
   }
   if(sale > 0){
      list =  list.filter(value =>{
        return value.Discount > 0;
      });
   }
   console.log(typeof sale +" "+list.length);
  
   const element = list.map((value,index)=>{
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
          <div className="row mb-5">
            <div className="col-md-12 order-1">
              {/* <TopSort></TopSort> */}
              <div className="row mb-5">
                    <div className="col-md-12 d-flex justify-content-between" >      
                        <div style={{flex : 1, width : "100%",marginRight:"20px"}}>
                            <input onChange={onChange} placeholder="Nhập tên sản phẩm .... "style={{width : "60%"}}></input>
                            <div  style={{marginLeft : "20px" , display : "inline-block"}} >TÌM KIẾM</div>
                        </div>
                        <div>
                                  <label>LOẠI</label>
                                  <select name="option" onChange={onChangeOption} value={options} style ={{marginLeft : "10px"}} >
                                      <option value={0}>Tất cả</option>
                                        {ele}
                                  </select> 
                              </div>
                              <div style={{marginLeft : '30px'}} >
                                <div>
                                  <label>GIẢM GIÁ</label>
                                  <select name="Sale" onChange={onChangeSale} value={sale} style ={{marginLeft : "10px"}} >
                                      <option value={0}>Không</option>
                                      <option value={1}>Có</option>
                                  </select> 
                              </div>
                    </div>
                    <div style={{marginLeft : '30px'}} >
                        THÔNG TIN SẢN PHẨM
                   </div>
                    </div>
                </div>
              <div className="row mb-5">
                   {list.length === 0 ? <h2>Không có sản phẩm cần tìm</h2> : element}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Content;