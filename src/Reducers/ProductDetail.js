import * as actionType from '../Const/Product/index';
const initState = {};

export default function myReducers(state = initState, action){
        switch (action.type) {
            case actionType.PRODUCT_DETAIL:
                return action.data;
            default:
                return state;
              
        }
}