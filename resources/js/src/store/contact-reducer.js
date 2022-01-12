const CHANGE_COLOR_MODE =  "CHANGE_COLOR_MODE"

let initialState = {
    colorMode: false
}

export const contactReducer = (state = initialState , action) => {
    switch(action.type){
        case CHANGE_COLOR_MODE:{
            return {
                ...state,
                colorMode: action.colorMode
            }
        }
        default:
            return state
    }
}


export const changeColorMode = (color) => ({ type: CHANGE_COLOR_MODE, color })