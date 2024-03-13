import { combineReducers } from "redux";
import count from "./counterreducer";
const rootreducer = combineReducers({
    count : count
});
export default rootreducer