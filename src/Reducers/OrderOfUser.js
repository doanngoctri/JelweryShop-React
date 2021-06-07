import * as actionType from '../Const/OrderUser/index'
const initState = []

export default function myReducers(state = initState, action){
        switch (action.type) {
            case actionType.FETCH_ALL_ORDER:
                state =  action.data;
                return [...state];
            default:
                return state;
              
        }
}