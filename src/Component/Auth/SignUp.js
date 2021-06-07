import React, { useState } from 'react';
import './asset/base.css';
import {Link} from 'react-router-dom'
import * as ActionLogin from '../../Action/User/index';
import * as ActionLoading from '../../Action/Loading/index';
import { useDispatch } from 'react-redux';
function SignUp(props) {
    const dispatch = useDispatch();
    const [ form , setForm ] = useState({
        name :'',
        email : '',
        phone : '',
        username : '',
        password : '',
        address : ''
    })
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
        dispatch(ActionLoading.displayLoading());
        setTimeout(() => {
            dispatch(ActionLoading.hiddenLoading());
        }, 500);
        e.preventDefault();
        ActionLogin.addLogin(form);
        
    }
    return (
            <div className="modal_footer">
                <div className="modal__overlay">
                </div>
                <div className="modal__body">
                    <div className="modal__inner">
                        <form className="form" onSubmit={onSubmit}>
                            <div className="modal__signin-heading">
                                    <h3 className="" className="heading__signin">ĐĂNG KÝ</h3>
                                    <Link to="/signin" className="heading__signup">ĐĂNG NHẬP</Link>
                            </div>
                            <div className="modal__signin-body">
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) </i>
                                    <input type="text" name="username" onChange={onChange} placeholder="Tài Khoản" className="form-control" required/>
                                </div>
                                <div className="modal__signin-form">
                                   <i className="modal__signin-form__warnning">(*) </i>
                                    <input type="password" name="password" onChange={onChange} placeholder="Mật khẩu" className="form-control" required/>
                                </div>

                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) </i>
                                    <input type="text" name="name" onChange={onChange} placeholder="Họ và tên" className="form-control" required/>
                                </div>

                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) </i>
                                    <input type="email" name="email" onChange={onChange} placeholder="Email" className="form-control" required/>
                                </div>

                                <div className="modal__signin-form">
                                     <i className="modal__signin-form__warnning">(*)</i>
                                    <input type="tel" name="phone" onChange={onChange} placeholder="Số điện thoại" className="form-control" required pattern="[0-9]{10}"/>
                                </div>
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*)</i>
                                    <input type="text" name="address" onChange={onChange} placeholder="Địa chỉ" className="form-control" required/>
                                </div>
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) : Không được bỏ trống</i>
                                </div>
                            </div>
                            <div className="action">
                                <button type="submit" className="button  btn-ok">Đăng ký</button>
                                <Link to="/" className="button btn-back">Trở lại</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
}

export default SignUp;