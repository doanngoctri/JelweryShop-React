import React, { useEffect, useState } from 'react';
import './asset/base.css';
import './asset/base';
import {Link, useHistory, useRouteMatch} from 'react-router-dom'
import * as action from '../../Action/Product/index';
import axios from 'axios';
import Api from '../../Axios/index';
import { useDispatch } from 'react-redux';
import * as ActionLoading from '../../Action/Loading/index';
function EditProduct(props) {
    const [option , setOption] = useState([])
    const token = JSON.parse(localStorage.getItem("token"));
    const history = useHistory();
    const match = useRouteMatch();
    const dispatch = useDispatch();
    const [ form , setForm ] = useState({
        Id : 0,
        ProGroupId : 0,
        Name :'',
        Price : '',
        Discount : 0,
        Size : 'S',
        Color : '',
        Image1 : '',
        Image2 : '',
        Image3 : '',
        Display : 'true',
        Description :'',
        Information : '',
        Stock : 0

    })
   
    useEffect(()=>{
        if(token.RoleId === 1){
            history.replace("/")
        }
        else{
            dispatch(ActionLoading.displayLoading());
            setTimeout(() => {
                dispatch(ActionLoading.hiddenLoading());
            }, 300);
            const id = match.params.slug;
            axios.get(`http://jewelrystoreservice.somee.com/api/proDetail?proId=${id}`,null)
            .then(res =>{
                var Product = res.data[0];
                setForm({
                    Id : Product.Id,
                    ProGroupId : Product.ProGroupId,
                    Name : Product.Name,
                    Price : Product.Price,
                    Discount : Product.Discount,
                    Size : Product.Size,
                    Color : Product.Color,
                    Image1 : Product.Image1,
                    Image2 : Product.Image2,
                    Image3 : Product.Image3,
                    Display : Product.Display ? 'true' : false,
                    Description :Product.Description,
                    Information : Product.Information,
                    Stock : Product.Stock
                })
            })
            axios.get('http://jewelrystoreservice.somee.com/api/allProductGroups')
            .then(res =>{
                setOption(res.data);
            })
        }

       // Api("")
     
    },[])
    const onChange = (e) =>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setForm({
            ...form,
            [name] : value
        })
    }
    
    const onSubmit = (e) =>{
        e.preventDefault();
        var Product = {
            Id : form.Id,
            ProGroupId: parseInt(form.ProGroupId),
            Name : form.Name,
            Price : parseFloat(parseFloat(form.Price).toFixed(1)),
            Discount : parseFloat(parseFloat(form.Discount).toFixed(1)),
            Size : form.Size,
            Color : form.Color,
            Image1 : form.Image1,
            Image2 : form.Image2,
            Image3 : form.Image3,
            Display : form.Display === 'true' ? true : false,
            Description :form.Description,
            Information : form.Information,
            Stock : parseInt(form.Stock ,10)

        }
        console.log(Product)
        console.log(typeof Product.Discount);
        dispatch(ActionLoading.displayLoading());
        setTimeout(() => {
            dispatch(ActionLoading.hiddenLoading());
        }, 600);
        axios.put("http://jewelrystoreservice.somee.com/api/Product",Product
            )
            .then(res =>{
                       alert("Thông báo : Sửa thành công");
                    })
                    .catch(err =>{
                        console.log(err)
                })

        
        
    }
    const onChangeFile =(e)=>{
        console.log(e.target.files[0]);
        const formData = new FormData();
        formData.append("file",e.target.files[0])   
        formData.append("upload_preset","jy6ujik2");
        dispatch(ActionLoading.displayLoading());
        // setTimeout(() => {
        //     dispatch(ActionLoading.hiddenLoading());
        // }, 500);
        axios.post("https://api.cloudinary.com/v1_1/dw59ze6aa/image/upload", formData)
            .then(res =>{
                console.log(res);
                setForm({
                    ...form ,
                    Image1 : res.data.url
                })
                dispatch(ActionLoading.hiddenLoading());
            })
            .catch(err=>{
                console.log(err);
            })
    }
    const onChangeFile2 =(e)=>{
        // console.log(e.target.files[0]);
         const formData = new FormData();
         formData.append("file",e.target.files[0])   
         formData.append("upload_preset","jy6ujik2");
         dispatch(ActionLoading.displayLoading());
        //  setTimeout(() => {
        //      dispatch(ActionLoading.hiddenLoading());
        //  }, 500);
         axios.post("https://api.cloudinary.com/v1_1/dw59ze6aa/image/upload", formData)
             .then(res =>{
                 console.log(res);
                 setForm({
                     ...form ,
                     Image2 : res.data.url
                 })
                 dispatch(ActionLoading.hiddenLoading());
             })
             .catch(err=>{
                 console.log(err);
             })
     }
     const onChangeFile3 =(e)=>{
        // console.log(e.target.files[0]);
         const formData = new FormData();
         formData.append("file",e.target.files[0])   
         formData.append("upload_preset","jy6ujik2");
         dispatch(ActionLoading.displayLoading());
        //  setTimeout(() => {
        //      dispatch(ActionLoading.hiddenLoading());
        //  }, 500);
         axios.post("https://api.cloudinary.com/v1_1/dw59ze6aa/image/upload", formData)
             .then(res =>{
                 console.log(res);
                 setForm({
                     ...form ,
                     Image3 : res.data.url
                 })
                 dispatch(ActionLoading.hiddenLoading());
             })
             .catch(err=>{
                 console.log(err);
             })
     }
     var ele = option.map(value =>{
        return (
            <option value={value.Id}>{value.Name}</option>
        )
    })
    return (    
            <div className="modal_footer">
                <div className="modal__overlay">
                </div>
                <div className="modal__body">
                    <div className="modal__inner">
                        <form className="form" onSubmit={onSubmit}>
                            <div className="modal__signin-heading">
                                    <h3  className="heading__signin">Thông tin sản phẩm</h3>
                                    {/* <Link to="/signin" className="heading__signup">Thêm sản phẩm</Link> */}
                            </div>
                            <div className="modal__signin-body">
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) : Mã sản phẩm </i>
                                    <input type="text" name="Id" value={form.Id} onChange={onChange} placeholder="Tên sản phẩm" className="form-control" required readOnly/>
                                </div>
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) : Tên sản phẩm </i>
                                    <input type="text" name="Name" value={form.Name} onChange={onChange} placeholder="Tên sản phẩm" className="form-control" required/>
                                </div>
                                <div className="modal__signin-form">
                                   <i className="modal__signin-form__warnning">(*) : Gía sản phẩm </i>
                                    <input type="number" name="Price" value={form.Price} onChange={onChange} placeholder="Giá sản phẩm" className="form-control" required/>
                                </div>
                                <div className="modal__signin-form">
                                   <i className="modal__signin-form__warnning">(*) : Số lượng sản phẩm </i>
                                    <input type="number" name="Stock" value={form.Stock} min="1" onChange={onChange} placeholder="Số lượng sản phẩm" className="form-control" required/>
                                </div>
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) : Giảm giá </i>
                                    <input type="number" name="Discount" value={form.Discount} onChange={onChange} min="0" max="1" step="0.1"  placeholder="Giảm giá" className="form-control" required/>
                                </div>

                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) : Kích thước</i>
                                    <select name="Size" onChange={onChange} value={form.Size} placeholder="Kích thước" className="form-control" required>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option vlaue="L">L</option>
                                    </select>
                                </div>
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) : Loại</i>
                                    <select name="ProGroupId" onChange={onChange} value={form.ProGroupId} placeholder="Kích thước" className="form-control" required>
                                            {ele}
                                    </select>
                                </div>
                                <div className="modal__signin-form">
                                     <i className="modal__signin-form__warnning">(*)</i>
                                    <input type="text" name="Color" onChange={onChange} value={form.Color} placeholder="Màu sắc" className="form-control" required />
                                </div>
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning"> Hình ảnh 1</i>
                                    <div>
                                        <img id="img" src={form.Image1}style={{marginTop : "10px",
                                            marginBottom : "10px",
                                            width : "20%"

                                            }}
                                        ></img>
                                    </div>
                                   
                                    <input id="Image1"type="file" name="Image1" onChange={onChangeFile} placeholder="Chọn ảnh" className="form-control"  accept="image/*" />
                                </div>
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning"> Hình ảnh 2</i>
                                    <div>
                                        <img id="img" src={form.Image2}style={{marginTop : "10px",
                                            marginBottom : "10px",
                                            width : '20%'
                                            }}
                                        ></img>
                                    </div>
                                   
                                    <input id="Image2"type="file" name="Image2" onChange={onChangeFile2} placeholder="Chọn ảnh" className="form-control"  accept="image/*"  />
                                </div>
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning"> Hình ảnh 3</i>
                                    <div>
                                        <img id="img" src={form.Image3}style={{marginTop : "10px",
                                            marginBottom : "10px",
                                            width : '20%'
                                            }}
                                        ></img>
                                    </div>
                                   
                                    <input id="Image3"type="file" name="Image3" onChange={onChangeFile3} placeholder="Chọn ảnh" className="form-control"  accept="image/*" />
                                </div>
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) : Trạng thái</i>
                                    <select name="Display" onChange={onChange} value={form.Display}placeholder="Kích thước" className="form-control" required>
                                            <option value={true}>Hiện</option>
                                            <option value={false}>Ẩn</option>
                            
                                    </select>
                                </div>
                                <div className="modal-sigin-form" style={{marginTop : "20px"}}>
                                    <i className="modal__signin-form__warnning"> Thông tin thêm</i>
                                    <input name="Information" onChange={onChange}  value={form.Information} className="form-control" placeholder="Viết thông tin thêm....."  />
                                </div>
                                <div className="modal-sigin-form" style={{marginTop : "20px"}}>
                                    <i className="modal__signin-form__warnning">(*) : Mô tả</i>
                                    <textarea name="Description" onChange={onChange} value={form.Description}   cols={30} rows={5} className="form-control" placeholder="Viết ghi chú của bạn ....." defaultValue={""}  required/>
                                </div>
                             
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) : Không được bỏ trống</i>
                                </div>
                            </div>
                            <div className="action">
                                <button type="submit" className="button  btn-ok">Xác nhận</button>
                                <Link to="/admin" className="button btn-back">Trở lại</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
}

export default EditProduct;