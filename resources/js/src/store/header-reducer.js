function headerReducer(state={}, action){
    switch(action.type){
        case "toggleCallWindow":{
            return{
                callWindow:action.payload
            }
        }
    }

    return state
}

export default headerReducer;