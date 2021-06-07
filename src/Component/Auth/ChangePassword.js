import React, { useEffect, useState } from 'react';
import './asset/base.css';
import {Link} from 'react-router-dom'
import * as ActionLogin from '../../Action/User/index';
import * as ActionLoading from '../../Action/Loading/index';
import { useDispatch } from 'react-redux';
function SignUp(props) {
    const [ form , setForm ] = useState({
        id : '',
        oldpassword : '',
        newpassword : ''
    })
    const dispatch = useDispatch();
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("token"));
        console.log(token);
        setForm({
            ...form,
            id : token.Id
        })

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
        dispatch(ActionLoading.displayLoading());
                setTimeout(() => {
                    dispatch(ActionLoading.hiddenLoading());
                }, 300);
        ActionLogin.changePassword(form);
        
    }
    return (
            <div className="modal_footer">
                <div className="modal__overlay">
                </div>
                <div className="modal__body">
                    <div className="modal__inner">
                        <form className="form" onSubmit={onSubmit}>
                            <div className="modal__signin-heading">
                                    <h3 className="" className="heading__signin">THÔNG TIN MẬT KHẨU</h3>
                                   
                            </div>
                            <div className="modal__signin-body">
                                <div className="modal__signin-form">
                                   <i className="modal__signin-form__warnning">(*) </i>
                                    <input type="password" name="oldpassword" onChange={onChange} placeholder="Mật khẩu cũ" className="form-control" required/>
                                </div>
                                <div className="modal__signin-form">
                                   <i className="modal__signin-form__warnning">(*) </i>
                                    <input type="password" name="newpassword" onChange={onChange} placeholder="Mật khẩu mới" className="form-control" required/>
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

export default SignUp;