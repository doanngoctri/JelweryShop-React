import * as actionType from '../Const/AdminOrder/index';
const initState = []

export default function myReducers(state = initState, action){
        switch (action.type) {
            case actionType.ADMIN_FETCH_ALL_ORDER:
                 console.log(action.state);
                 state =  action.data;
                return [...state];
            case actionType.ADMIN_DELETE_ORDER :
                state.splice(0,state.length);
                return [...state];    
            case actionType.ADMIN_CHANGE_STATUS :
                console.log(state);
                const id = action.id    
                var index = findIndex(state , id);
                console.log(index);
                if(index >= 0 ) state[index].StatusId = 2;
                return [...state];
            default:
                return state;
              
        }
}

var findIndex = (state ,id)=>{
    for(let i = 0 ; i < state.length ; i++){
        if(state[i].Id === id) return i;
    }
    return  -1;
}