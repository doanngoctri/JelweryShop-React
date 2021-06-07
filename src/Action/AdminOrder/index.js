import Api from '../../Axios';
import * as actionType from '../../Const/AdminOrder/index';


const getAllOrder = (data) =>{
    return {
        type : actionType.ADMIN_FETCH_ALL_ORDER ,
        data
    }
}

export const adminFetchAllOrder = () =>{
    return dispatch =>{
        return Api("allOrders","GET", null)
                .then(res =>{
                       if(res.data.length > 0) dispatch(getAllOrder(res.data)); 
                })
    }
}

const changeStatus = (id)=>{
    return{
        type : actionType.ADMIN_CHANGE_STATUS,
        id
    }
}
export const adminChangeStatus = (id) =>{
    return dispatch =>{
        return Api(`statusOrder?Id=${id}`,'PUT',null)
            .then(res =>{
                if(res.status === 200) 
                {
                    dispatch(changeStatus(id));
                    dispatch({
                        type : 'LOADING_HIDDEN'
                    });
                }
            })
    }
}