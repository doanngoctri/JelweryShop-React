import * as actionType from '../../Const/Product/index';
import Api from '../../Axios/index';
const allProduct = (data) =>{
        return {
            type : actionType.ALL_PRODUCT,
            data
        }
}

export const fetchAllProduct = () =>{
    return (dispatch) =>{
        return Api('allProducts','GET',null)
                .then(res =>{
                    dispatch(allProduct(res.data));
                });
    }
}


export const getDetail = (id,history) =>{
    return (dispatch) =>{
        return Api(`proDetail?proId=${id}`,'GET',null)
        .then(res =>{
            console.log(res);
             if(res.data.length === 0)
             {
               
                 history.push("/shop");
                 alert("Không có sản phẩm vui lòng quay lại !")
             }
             else{
                dispatch(productDetail(res.data[0]));
             }
           
        })
    }
}

const productDetail = (data) =>{
    return {
        type : actionType.PRODUCT_DETAIL,
        data
    }
}


// const addProduct = (data) =>{
//     return{
//         type : actionType.ADD_PRODUCT,
//         data
//     }
// }
// export const fetchAddProduct = (product) =>{
//     return dispatch =>{
//         return Api("newProduct","POST", product)
//               .then(res =>{
//                   console.log(res);
//               }) 
//     }
// }

// const editProduct = (data) =>{
//     return{
//         type : actionType.EDIT_PRODUCT,
//         data
//     }
// }

// export const fetchEditProduct = (product) =>{
//     return Api("Product","PUT", product)
//         .then(res =>{
//             console.log(res);
//         }) 
// }