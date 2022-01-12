let initialState = {
    colorMode: false
}



const CHANGE_COLOR_MODE = "CHANGE_COLOR_MODE"

export const themeReducer = (state = initialState,action) => {
    switch(action.type){
        case CHANGE_COLOR_MODE:{
            return {
                ...state,
                colorMode: action.color
            }
        }
        default:
            return state
    }
}



export const setColorModeAC = (color) => ({ type: CHANGE_COLOR_MODE, color })
