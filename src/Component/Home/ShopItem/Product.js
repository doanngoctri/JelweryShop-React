import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import * as action from '../../../Action/UserCart/index';
import * as ActionLoading from '../../../Action/Loading/index';
import ImageZoom from 'react-medium-image-zoom';
import 'react-slideshow-image/dist/styles.css'
function Product(props) {
    const [zoom , setZoom] = useState();
    const [chose , setChose] = useState('Image1');
    const dispatch = useDispatch()
    const token =  JSON.parse(localStorage.getItem("token"));
    const [value , setValue] = useState({
        state :  1
    });
    const { productDetail } = props;
    const {
        Color ,
        Description,
        Discount,
        Display,
        Id,
        Image1,
        Image2,
        Image3,
        Information, 
        Name ,
        Price ,
        ProGroup1,
        Size,
        Stock
    } = productDetail
    useEffect(()=>{
        setZoom(Image1);
    }, []);
    const Click = (id)=>{
         const temp = value.state  + id;
         if(temp >= 0){
            setValue({
                state : temp
            })  
        }
        
    }
    const onSubmit = ()=>{
        if(token){
            const result = value.state;
            if(result === 0)
            {
                alert("Thông báo ! : sản phẩm số lượng lớn hơn 0");
            }
            else{
                dispatch(ActionLoading.displayLoading());
                setTimeout(() => {
                    dispatch(ActionLoading.hiddenLoading());
                }, 300);
                dispatch(action.addProductToCart(token.Id ,productDetail, result));
            }
        }
    }
    const onClick = (e) =>{
      if(chose !== e.target.id){
        var choose  = document.getElementById(chose);
        var clickImage = document.getElementById(e.target.id);
        var choseImage = document.getElementById('choseimage');
        choose.style.border = 'none';
        choseImage.src = clickImage.src;
        setZoom(clickImage.src);
        clickImage.style.border= '2px solid red';
        setChose(e.target.id);
      } 
     
    }
    return (
        <div>
             <div className="bg-light py-3">
            <div className="container">
            <div className="row">
                <div className="col-md-12 mb-0"><Link to="/">Trang chủ</Link> <span className="mx-2 mb-0">/</span> <Link to="/shop">Cửa hàng</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">{Name}</strong></div>
            </div>
            </div>
        </div>  
        <div className="site-section">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                <div className="item-entry">
                    <div>
                      <label>HÌNH ẢNH SẢN PHẨM</label>
                    </div>
                    <div className="product-item  md-height bg-gray d-block" style={{backgroundColor : '#ccc', borderRadius : '5px' , padding : '0' ,position : 'relative'}}>
                            
                         
                        {/* <img src={Image1} id="choseimage" alt="Image" style={{borderRadius : '5px'}} /> */}
                        <ImageZoom
                            image={{
                                src: Image1,
                                className: 'img',
                                id : 'choseimage',
                           
                            }}
                            zoomImage={{
                                src: {zoom}
                            }}
                        />
                    </div>
                    <div style={{display : 'flex', flexDirection : 'column' ,position : 'absolute' ,left : '25px' , top : '95px'}}>
                            <img onClick={onClick} id="Image1" src={Image1} alt="Image" style={{borderRadius : '5px' , width : '80px', marginTop : '10px' , cursor : 'pointer' , border : '2px solid red' }}/>
                            <img onClick={onClick} id="Image2" src={Image2} alt="Image" style={{borderRadius : '5px' , width : '80px' , marginTop : '10px' , cursor : 'pointer'}}/>
                            <img onClick={onClick} id="Image3" src={Image3} alt="Image" style={{borderRadius : '5px' , width : '80px' , marginTop : '10px' , cursor : 'pointer'}}/>
                    </div>
                </div>
                </div>
                <div className="col-md-6">
                <h2 className="text-black">{Name}</h2>
                <p>{Description}</p>
                <p className="mb-4">{Information}</p>
                <p className="mb-4">Size : {Size}</p>
                <p><strong className="text-primary h4">${Price*value.state - Price*Discount*value.state }</strong></p>
                {/* <div className="mb-1 d-flex">
                    <label htmlFor="option-sm" className="d-flex mr-3 mb-3">
                    <span className="d-inline-block mr-2" style={{top: '-2px', position: 'relative'}}><input type="radio" id="option-sm" name="shop-sizes" /></span> <span className="d-inline-block text-black">Small</span>
                    </label>
                    <label htmlFor="option-md" className="d-flex mr-3 mb-3">
                    <span className="d-inline-block mr-2" style={{top: '-2px', position: 'relative'}}><input type="radio" id="option-md" name="shop-sizes" /></span> <span className="d-inline-block text-black">Medium</span>
                    </label>
                    <label htmlFor="option-lg" className="d-flex mr-3 mb-3">
                    <span className="d-inline-block mr-2" style={{top: '-2px', position: 'relative'}}><input type="radio" id="option-lg" name="shop-sizes" /></span> <span className="d-inline-block text-black">Large</span>
                    </label>
                    <label htmlFor="option-xl" className="d-flex mr-3 mb-3">
                    <span className="d-inline-block mr-2" style={{top: '-2px', position: 'relative'}}><input type="radio" id="option-xl" name="shop-sizes" /></span> <span className="d-inline-block text-black"> Extra Large</span>
                    </label>
                </div> */}
                <div className="mb-5">
                    <div className="input-group mb-3" style={{maxWidth: '120px'}}>
                    <div className="input-group-prepend">
                        <div className="btn btn-outline-primary js-btn-minus" onClick={e=>Click(-1)}>−</div>
                    </div>
                    <input type="text" className="form-control text-center" defaultValue={value.state} value={value.state} placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" readOnly />
                    <div className="input-group-append">
                        <div className="btn btn-outline-primary js-btn-plus" onClick={e=>Click(1)}  >+</div>
                    </div>
                    </div> 
                    <i>Sản phẩm còn lại : {Stock}</i>
                </div>
                <p><div onClick={onSubmit} className="buy-now btn btn-sm height-auto px-4 py-3 btn-primary">Thêm vào giỏ hàng</div></p>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
}

export default Product;



