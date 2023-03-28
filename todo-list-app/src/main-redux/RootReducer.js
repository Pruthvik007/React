import { combineReducers } from "redux";
import { listReducer, taskReducer } from "../utils/Imports";
const RootReducer = combineReducers({
  tasks: listReducer,
  task: taskReducer,
});
export default RootReducer;
