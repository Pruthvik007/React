import { configureStore } from "../utils/Imports";
import RootReducer from "../main-redux/RootReducer"
import { data } from "../utils/tasksData";
const store = configureStore({
  reducer: RootReducer,
  preloadedState: {
    tasks: [...data],
  },
});
export default store;
