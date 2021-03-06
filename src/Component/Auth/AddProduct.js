import React, { useEffect, useState } from 'react';
import './asset/base.css';
import './asset/base';
import {Link, useHistory} from 'react-router-dom'
import * as action from '../../Action/Product/index';
import axios from 'axios';
import * as actionType from '../../Const/Product/index';
import { useDispatch } from 'react-redux';
import *  as ActionLoading from '../../Action/Loading/index';
function AddProduct(props) {
    const [option , setOption] = useState([])
    const token = JSON.parse(localStorage.getItem("token"));
    const history = useHistory();
    const dispatch = useDispatch();
    const [ form , setForm ] = useState({
        Id : 0,
        ProGroupId : 1,
        Name :'',
        Price : '',
        Discount : 0,
        Size : 'S',
        Color : '',
        Image1 : '',
        Image2 : '',
        Image3 : '',
        Description :'',
        Information : '',
        Stock : 1,
        Advertisments : null,
        CartItems : null,
        OderItems : null,
        ProductGroup : null



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
            axios.get('http://jewelrystoreservice.somee.com/api/allProductGroups')
                    .then(res =>{
                        setOption(res.data);
                    })
        }
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

            ProGroupId: parseInt(form.ProGroupId,10),
            Name : form.Name,
            Price : parseFloat(form.Price) ,
            Discount : parseFloat(form.Discount),
            Size : form.Size,
            Color : form.Color,
            Image1 : form.Image1,
            Image2 : form.Image2,
            Image3 : form.Image3,
            Description :form.Description,
            Information : form.Information,
            Stock :  parseInt(form.Stock,10),
            Advertisments : [],
            CartItems : [],
            OderItems : [],
            ProductGroup : null
        }
        dispatch(ActionLoading.displayLoading());
        setTimeout(() => {
            dispatch(ActionLoading.hiddenLoading());
        }, 800);
        axios.post("http://jewelrystoreservice.somee.com/api/newProduct",Product,{
            headers:{
                "Content-type": "application/json",
                "Accept": "application/json" 
            }
        })
        .then(res =>{
                alert("Th??m s???n ph???m th??nh c??ng !");
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
        // setTimeout(() => {
        //     dispatch(ActionLoading.hiddenLoading());
        // }, 500);
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
        // setTimeout(() => {
        //     dispatch(ActionLoading.hiddenLoading());
        // }, 500);
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
    console.log(form)
    return (    
            <div className="modal_footer">
                <div className="modal__overlay">
                </div>
                <div className="modal__body">
                    <div className="modal__inner">
                        <form className="form" onSubmit={onSubmit}>
                            <div className="modal__signin-heading">
                                    <h3  className="heading__signin">Th??m s???n ph???m</h3>
                                    {/* <Link to="/signin" className="heading__signup">Th??m s???n ph???m</Link> */}
                            </div>
                            <div className="modal__signin-body">
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) : T??n s???n ph???m </i>
                                    <input type="text" name="Name" value={form.Name} onChange={onChange} placeholder="T??n s???n ph???m" className="form-control" required/>
                                </div>
                                <div className="modal__signin-form">
                                   <i className="modal__signin-form__warnning">(*) : Gi?? s???n ph???m </i>
                                    <input type="number" name="Price" value={form.Price} min="1" onChange={onChange} step = '0.5' placeholder="Gi?? s???n ph???m" className="form-control" required/>
                                </div>
                                <div className="modal__signin-form">
                                   <i className="modal__signin-form__warnning">(*) : S??? l?????ng s???n ph???m </i>
                                    <input type="number" name="Stock" value={form.Stock} min="1" onChange={onChange} placeholder="S??? l?????ng s???n ph???m" className="form-control" required/>
                                </div>
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) : Gi???m gi?? </i>
                                    <input type="number" name="Discount" value={form.Discount} onChange={onChange} min="0" max="1" step="0.1"  placeholder="Gi???m gi??" className="form-control" required/>
                                </div>

                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) : K??ch th?????c</i>
                                    <select name="Size" onChange={onChange} value={form.Size} placeholder="K??ch th?????c" className="form-control" required>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option vlaue="L">L</option>
                                    </select>
                                </div>
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) : Lo???i</i>
                                    <select name="ProGroupId" onChange={onChange} value={form.ProGroupId} placeholder="K??ch th?????c" className="form-control" required>
                                            {ele}
                                    </select>
                                </div>
                                <div className="modal__signin-form">
                                     <i className="modal__signin-form__warnning">(*) : M??u s???c</i>
                                    <input type="text" name="Color" onChange={onChange} value={form.Color} placeholder="M??u s???c" className="form-control" required />
                                </div>
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*): H??nh ???nh 1</i>
                                    <div>
                                        <img id="img" src={form.Image1}style={{marginTop : "10px",
                                            marginBottom : "10px",
                                         
                                            }}
                                        ></img>
                                    </div>
                                   
                                    <input id="Image1"type="file" name="Image1" onChange={onChangeFile} placeholder="Ch???n ???nh" className="form-control"  accept="image/*" required />
                                </div>
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*): H??nh ???nh 2</i>
                                    <div>
                                        <img id="img" src={form.Image2}style={{marginTop : "10px",
                                            marginBottom : "10px",
                                         
                                            }}
                                        ></img>
                                    </div>
                                   
                                    <input id="Image2"type="file" name="Image2" onChange={onChangeFile2} placeholder="Ch???n ???nh" className="form-control"  accept="image/*" required />
                                </div>
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*): H??nh ???nh 3</i>
                                    <div>
                                        <img id="img" src={form.Image3}style={{marginTop : "10px",
                                            marginBottom : "10px",
                                         
                                            }}
                                        ></img>
                                    </div>
                                   
                                    <input id="Image3"type="file" name="Image3" onChange={onChangeFile3} placeholder="Ch???n ???nh" className="form-control"  accept="image/*" required />
                                </div>
                                {/* <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) : K??ch th?????c</i>
                                    <select name="Display" onChange={onChange} value={form.Display}placeholder="K??ch th?????c" className="form-control" required>
                                            <option value={true}>Hi???n</option>
                                            <option value={false}>???n</option>
                            
                                    </select>
                                </div> */}
                                <div className="modal-sigin-form" style={{marginTop : "20px"}}>
                                    <i className="modal__signin-form__warnning">(*) : Th??ng tin th??m</i>
                                    <input name="Information" onChange={onChange}  value={form.Information} className="form-control" placeholder="Vi???t th??ng tin th??m....."  />
                                </div>
                                <div className="modal-sigin-form" style={{marginTop : "20px"}}>
                                    <i className="modal__signin-form__warnning">(*) : M?? t???</i>
                                    <textarea name="Description" onChange={onChange} value={form.Description}   cols={30} rows={5} className="form-control" placeholder="Vi???t ghi ch?? c???a b???n ....." defaultValue={""}  required/>
                                </div>
                             
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) : Kh??ng ???????c b??? tr???ng</i>
                                </div>
                            </div>
                            <div className="action">
                                <button type="submit" className="button  btn-ok">X??c nh???n</button>
                                <Link to="/admin" className="button btn-back">Tr??? l???i</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
}

export default AddProduct;