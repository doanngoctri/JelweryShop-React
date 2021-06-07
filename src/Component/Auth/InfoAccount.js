import React, { useEffect, useState } from 'react';
import './asset/base.css';
import {Link} from 'react-router-dom';
import * as ActionLogin from '../../Action/User/index';
import * as actionLoading from '../../Action/Loading/index';
import { useDispatch } from 'react-redux';
function InfoAccount(props) {
    const dispatch = useDispatch();
    const [ form , setForm ] = useState({
        id : '',
        name :'',
        email : '',
        phone : '',
        address : '',
        avatar : ''

    });
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('token'));
        console.log(token);
        setForm({
            id : token.Id,
            name : token.Name,
            email : token.Email,
            phone : token.Phone,
            avatar : token.Avatar,
            address : token.Address
        });
        
    },[]);

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
        dispatch(actionLoading.displayLoading());
                setTimeout(() => {
                    dispatch(actionLoading.hiddenLoading());
                }, 300);
        e.preventDefault();
        ActionLogin.updateUser(form);
        
    }
    return (
            <div className="modal_footer">
                <div className="modal__overlay">
                </div>
                <div className="modal__body">
                    <div className="modal__inner">
                        <form className="form" onSubmit={onSubmit}>
                            <div className="modal__signin-heading">
                                    <h3 className="" className="heading__signin">THÔNG TIN CÁ NHÂN</h3>
                               
                            </div>
                            <div className="modal__signin-body">
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) </i>
                                    <input type="text" value={form.name} name="name" onChange={onChange} placeholder="Họ và tên" className="form-control" required/>
                                </div>

                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) </i>
                                    <input type="email" value={form.email} name="email" onChange={onChange} placeholder="Email" className="form-control" required/>
                                </div>

                                <div className="modal__signin-form">
                                     <i className="modal__signin-form__warnning">(*)</i>
                                    <input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="Số điện thoại" className="form-control" required pattern="[0-9]{10}"/>
                                </div>
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*)</i>
                                    <input type="text" value={form.address} name="address" onChange={onChange} placeholder="Địa chỉ" className="form-control" required/>
                                </div>
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) : Không được bỏ trống</i>
                                </div>
                            </div>
                            <div className="action">
                                <button type="submit" className="button  btn-ok">Đồng ý</button>
                                <Link to="/" className="button btn-back">Trở lại</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
}

export default InfoAccount;