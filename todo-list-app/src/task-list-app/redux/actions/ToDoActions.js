import { useDispatch } from "react-redux";
const ToDoActions = () => {
  const dispatch = useDispatch();

  const addTask = (task) => {
    dispatch({
      type: "ADD",
      payload: task,
    });
  };

  const deleteTask = (taskId) => {
    dispatch({
      type: "DELETE",
      payload: taskId,
    });
  };

  const deleteAll = () => {
    dispatch({
      type: "DELETE_ALL",
    });
  };

  const updateTask = (task) => {
    dispatch({
      type: "UPDATE",
      payload: task,
    });
  };

  const updateTaskStatus = (taskId) => {
    dispatch({
      type: "UPDATE_STATUS",
      payload: taskId,
    });
  };

  const resetTaskList = () => {
    dispatch({
      type: "RESET",
    });
  };

  const setTask = (task) => {
    dispatch({
      type: "SET_TASK",
      payload: task,
    });
  };

  return Object.freeze({
    addTask,
    deleteTask,
    updateTask,
    deleteAll,
    updateTaskStatus,
    resetTaskList,
    setTask,
  });
};

export default ToDoActions;
