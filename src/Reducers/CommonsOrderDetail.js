const initState = []

export default function myReducers(state = initState, action){
        switch (action.type) {
            case 'FECTH_ALL_ORDER_DETAIL':     
                state =  action.data;
                return [...state];
            default:
                return state;
              
        }
}