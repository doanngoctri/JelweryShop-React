import Api from '../../Axios';
import * as actionType from '../../Const/UserCart/index';
const userCart = (data) =>{
    return {
        type : actionType.FECTCH_USER_CART,
        data
    }
}
export const fecthUserCart = (id)=>{
    return (dispatch) =>{
        return Api(`allProsOfCart?userId=${id}`,'GET',null)
                .then(res =>{
                    
                    if(res.data.length > 0) dispatch(userCart(res.data))
                })
    }
}


export const deleteProductCart = (productID , userID)=>{
    return (dispatch)=>{
        return Api(`deleteCartItem?userId=${userID}&productId=${productID}`,'GET',null)
                .then(res =>{
                    if(res.data[0].result === 1){
                        dispatch(deleteProduct(productID));
                    }
                  
                })
    }
}
const deleteProduct =(data) =>{
    return {
        type : actionType.DELETE_CART_PRODUCT,
        data 
    }
}

export const addProductToCart = (userId , product , quantity)=>{
    return dispatch =>{
        return Api(`plusCartItem?userId=${userId}&productId=${product.Id}&quantity=${quantity}`,'GET',null)
            .then(res =>{
                  if(res.data[0].result === -1){
                      alert("Thông báo : Số lượng trong kho không đủ !");
                  }
                  else {
                      dispatch(addProduct(product , quantity));
                      alert("Thông báo : Thêm vào giỏ hàng thành công !");
                  }
            })
    }
}

export const addProduct = (data,quantity)=>{
    return {
        type : actionType.ADD_CART_PRODUCT,
        data,
        quantity
    }
}



export const changeQuantityProdcut = (id , quantity) =>{
    return {
        type : actionType.CHANGE_QUANTITY_PRODUCT,
        data : {
            id ,
            quantity
        }
    }
}

