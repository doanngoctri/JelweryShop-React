import * as actionType from '../Const/Loading/index';
const initState = false;

export default function myReducers(state = initState, action){
        switch (action.type) {
            case actionType.LOADING_DISPLAY:
                    state = true;
                return state;
            case actionType.LOADING_HIDDEN :
                    state = false;
                return state
            default:
                return state;
              
        }
}