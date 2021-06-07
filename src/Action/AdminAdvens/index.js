import Api from '../../Axios';
import * as actionType from '../../Const/AdminAdvens/index';


const allAdvens = (data)=>{
    return {
        type : actionType.ADMIN_FETCH_ALL_ADVENS,
        data
    }
}

export const adminFetchAllAdvens = () =>{
    return disptach =>{
        return Api('allAdvertisments', 'GET' ,null)
            .then(res =>{
                disptach(allAdvens(res.data));
            })
    }
}

const deleteAdvens =(id) =>{
    return {
        type : actionType.ADMIN_DELETE_ADVENS,
        id
    }
}

export const fetchDeleteAdvens = (id)=>{
    return disptach =>{
        return Api(`Advertisments?proId=${id}`, 'DELETE' ,null)
            .then(res =>{
                disptach(deleteAdvens(id));
                disptach({
                    type : 'LOADING_HIDDEN'
                })
            })
    }
}
const fetchAddAdvens = (data)=>{
    return {
        type : actionType.ADMIN_FETCH_ADD_ADVENS,
        data
    }
}
export const adminFetchAdminAdvens =(value)=>{
    return disptach =>{
        return Api(`Advertisments?proId=${value.Id}`, 'POST' ,null)
            .then(res =>{
                disptach(fetchAddAdvens(value));
                disptach({
                    type : 'LOADING_HIDDEN'
                })
            })
    }
}