function signReducer(state={}, action){
    switch(action.type){
        case "sign":{
            console.log(action.payload);
            return{
                sign:action.payload
            }
        }
    }

    return state
}

export default signReducer;