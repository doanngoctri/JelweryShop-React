import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Thank from '../../Component/Home/Thank/index';
function ThankPage(props) {
    const token = JSON.parse(localStorage.getItem("token"))
    const history = useHistory();
    useEffect(() =>{
        if(token.RoleId === 2){
            history.replace("/admin");
        }
        
    },[])
    return (
        <Thank></Thank>
    );
}

export default ThankPage;