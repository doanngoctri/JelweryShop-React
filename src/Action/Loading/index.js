import * as actionType from '../../Const/Loading';

export const hiddenLoading = ()=>{
    return {
        type : actionType.LOADING_HIDDEN
    }
}
export const displayLoading = ()=>{
    return {
        type : actionType.LOADING_DISPLAY
    }
}