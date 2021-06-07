import Product from '../Component/Home/ShopItem/Product';
import * as actionType from '../Const/UserCart/index';
const initState = [];

export default function myReducers(state = initState, action){
        switch (action.type) {
            case actionType.FECTCH_USER_CART:
                state = action.data;
                return [...state];
            case actionType.DELETE_CART_PRODUCT:
                const id = action.data;
                const index = findIndex(state,id);
                state.splice(index,1);
                return [...state];
            case actionType.ADD_CART_PRODUCT :
                const data = action.data;
                const quantity = action.quantity;
                data.Quantity = quantity;
                const index1 = findIndex(state,data.Id);
                if(index1 === -1){
                    state.push(data);
                }
                else {
                    state[index1].Quantity = state[index1].Quantity + data.Quantity;
                }
                return [...state];
            case actionType.CHANGE_QUANTITY_PRODUCT :
               
                const proid = action.data.id;
                const proquantity = action.data.quantity;   
                const index2 = findIndex(state , proid);
                if(proquantity > 0){
                    state[index2].Quantity = proquantity;
                }
                else{
                    state.splice(index2,1);
                }
                return [...state]
            case actionType.DELETE_CART :
                state.splice(0, state.length);
                return [...state];
            default:
                return state;
              
        }
}
const findIndex = (state , proid) =>{
    if(state.length > 0){
        for(let i = 0 ; i < state.length ; i++){
            if(state[i].Id === proid) 
            {
                console.log(state[i].Id)
                return i;
            }
        }
    }
  
    return -1;
}