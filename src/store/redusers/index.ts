
import {combineReducers} from "redux"
import { userReduser } from "./userReduser";
import { todoReduser } from "./todoReduser";



export const rootReducer = combineReducers({
    user: userReduser,
    todo: todoReduser
})

export type RootState = ReturnType<typeof rootReducer>