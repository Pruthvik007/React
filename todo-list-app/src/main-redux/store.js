import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { configureStore } from "../utils/Imports";
import RootReducer from "../main-redux/RootReducer";
import { data } from "../utils/tasksData";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState: {
    tasks: [...data],
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
