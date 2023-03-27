import { combineReducers } from "redux";
import listReducer from "../task-list-app/redux/reducers/listReducer";
import taskReducer from "../task-list-app/redux/reducers/taskReducer";
const RootReducer = combineReducers({
  tasks: listReducer,
  task: taskReducer,
});
export default RootReducer;
