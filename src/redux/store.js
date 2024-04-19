import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as pokemonDataReducer } from "./reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    pokemonDataReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk)) 