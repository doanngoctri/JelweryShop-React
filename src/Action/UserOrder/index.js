import * as actionType from '../../Const/OrderUser/index';
import Api from '../../Axios/index';
const allOrder = (data) =>{
    return {
        type : actionType.FETCH_ALL_ORDER,
        data
    }
}

export const fetchAllOrder = (id) =>{
    return dispatch =>{
        return Api(`allOrdersOfUser?userId=${id}`,'GET',null)
            .then(res => {
                dispatch(allOrder(res.data))
            })
    }
}