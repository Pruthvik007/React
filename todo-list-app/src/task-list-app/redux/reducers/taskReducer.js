const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state;
    case "UPDATE_TODO":
      return action.payload;
    case "SET_TASK":
      return action.payload;
    default:
      return state;
  }
};

export default taskReducer;
