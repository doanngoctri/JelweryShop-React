import * as actionType from '../Const/AdminAdvens/index';
const initState = []

export default function myReducers(state = initState, action){
        switch (action.type) {
            case actionType.ADMIN_FETCH_ALL_ADVENS:     
                state =  action.data;
                return [...state];
            case actionType.ADMIN_DELETE_ADVENS :
                const index = findIndex(state,action.id);
                if(index > -1) state.splice(index,1);
                return [...state];
            case actionType.ADMIN_FETCH_ADD_ADVENS :
                var jsonState = state;
                jsonState.push(action.data);
                console.log(jsonState);
                return jsonState;
            default:
                return state;
              
        }
}

const findIndex = (state , id) =>{
    for(let i = 0 ; i < state.length ; i++){
        if(state[i].Id === id) return i;
    }
    return -1;
}