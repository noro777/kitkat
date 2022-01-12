const CALL_WINDOW_TOGGLE ="CALL_WINDOW_TOGGLE"

let initialState ={
    callWindowStatus:false
}

export const headerReducer = (state = initialState, action) => {
    switch(action.type){
        case CALL_WINDOW_TOGGLE:{
            return{
                ...state,
                callWindowStatus:action.payload,
            }
        }
        default:
            return state
    }
}

export const callWindowToggleAC = (payload) => ({ type: CALL_WINDOW_TOGGLE, payload })