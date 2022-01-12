import { combineReducers, createStore } from "redux";
import { contactReducer } from "./contact-reducer";
import { headerReducer } from "./header-reducer";
import { serviceReducer } from "./service-reducer";
import { themeReducer } from "./theme-color";



let reducers = combineReducers({
    service: serviceReducer,
    contact: contactReducer,
    theme: themeReducer,
    callWindow: headerReducer
})


let store = createStore(reducers)

window.store = store

export default store