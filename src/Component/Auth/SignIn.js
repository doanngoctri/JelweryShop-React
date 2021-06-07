import React, { useState } from 'react';
import './asset/base.css';
import {Link ,  withRouter} from 'react-router-dom';
import * as ActionLogin from '../../Action/User/index';
import * as ActionLoading from '../../Action/Loading/index';
import { useDispatch } from 'react-redux';
function SignIn(props) {
    const [login , setLogin] = useState({
            username : "",
            password : "",
    });
    const dispacth = useDispatch();
    const history = props.history;
    console.log(history);
    const handleOnChange = (e) =>{
            const target = e.target;
            const name = target.name;
            const value = target.value;
            setLogin({
                ...login,
                [name] : value
              
            })
          
    }
    const onSubmit = (e)=>{
        dispacth(ActionLoading.displayLoading());   
        e.preventDefault();
        ActionLogin.login(login,history);
        setTimeout(() => {
            dispacth(ActionLoading.hiddenLoading());
        }, 500);

    }
    return (
            <div className="modal_footer">
                <div className="modal__overlay">
                </div>
                <div className="modal__body">
                    <div className="modal__inner">
                        <form onSubmit={onSubmit} className="form">
                            <div className="modal__signin-heading">
                                    <h3 className="" className="heading__signin">ĐĂNG NHẬP</h3>
                                    <Link to="signup" className="heading__signup">ĐĂNG KÝ</Link>
                            </div>
                            <div className="modal__signin-body">
                                    <i className="modal__signin-form__warnning">(*)</i>
                                <div className="modal__signin-form">
                                    <input type="text" 
                                           placeholder="Tài Khoản" 
                                           name="username" 
                                           onChange={handleOnChange} 
                                           className="form-control" 
                                           required
                                     />
                                </div>
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*)</i>
                                    <input type="password" 
                                            placeholder="Mật khẩu" 
                                            name="password" 
                                            onChange ={handleOnChange}
                                            className="form-control" 
                                            required
                                            />
                                </div>
                                <div className="modal__signin-form">
                                    <i className="modal__signin-form__warnning">(*) : Không được bỏ trống</i>
                                </div>
                            </div>
                            <div className="action">
                                <button type="submit" className="button  btn-ok">Đăng nhập</button>
                                <Link to="/" className="button btn-back">Trở lại</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
}

export default withRouter(SignIn);