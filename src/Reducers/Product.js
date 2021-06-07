import * as actionType from '../Const/Product/index';
const initState = []

export default function myReducers(state = initState, action){
        switch (action.type) {
            case actionType.ALL_PRODUCT:
                state = action.data;
                return [...state];
            // case actionType.ADD_PRODUCT :
            //     const data = action.data;
            //     state[state.length++] =data;
            //     return [...state];
            // case actionType.EDIT_PRODUCT:
            //     const data1 = action.data;   
            //     var index = findIndex(state,data1.Id);
            //     if(index >= 0){
            //         state[index] = data1;
            //     }
            //     return [...state];
            default:
                return state;
              
        }
}

// var findIndex = (state , id) =>{
//     for(let i = 0 ; i <state.length ; i ++){
//         if(state[i].Id === id) return i;
//     }
//     return -1;
// }