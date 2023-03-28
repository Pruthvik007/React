import { combineReducers, ListReducer, TaskReducer } from "../utils/Imports";
const RootReducer = combineReducers({
  tasks: ListReducer,
  task: TaskReducer,
});
export default RootReducer;
