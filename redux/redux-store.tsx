import {applyMiddleware, createStore, combineReducers, compose} from "redux";
import {postsReducer} from "./redusors/redusor";
import thunkMiddleware from "redux-thunk";

let rootReducer = combineReducers({
   postsReducer: postsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
