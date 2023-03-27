import { data } from "../../../utils/tasksData";
const listReducer = (state = [], action) => {
  let todos;
  switch (action.type) {
    case "ADD":
      let task = action.payload;
      todos = state.map((task) => Object.assign({}, task));
      task = { ...task, taskId: todos.length + 1, taskStatus: "PENDING" };
      return [...todos, task];

    case "DELETE":
      todos = state.map((task) => Object.assign({}, task));
      todos.splice(
        todos.findIndex((todo) => todo.taskId === action.payload),
        1
      );
      return todos;

    case "DELETE_ALL":
      return [];

    case "UPDATE":
      todos = state.map((task) => Object.assign({}, task));
      todos[todos.findIndex((todo) => todo.taskId === action.payload.taskId)] =
        action.payload;
      return todos;

    case "RESET":
      return [...data];

    case "UPDATE_STATUS":
      todos = state.map((task) => Object.assign({}, task));
      let index = todos.findIndex((todo) => todo.taskId === action.payload);
      todos[index].taskStatus =
        todos[index].taskStatus === "COMPLETED" ? "PENDING" : "COMPLETED";
      return todos;
    default:
      return state;
  }
};

export default listReducer;
