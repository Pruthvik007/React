import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import { data } from "../utils/tasksData";
const store = configureStore({
  reducer: RootReducer,
  preloadedState: {
    tasks: [...data],
  },
});
export default store;
