import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ToDoActions from "../redux/actions/ToDoActions";
import { useNavigate } from "react-router-dom";
const List = () => {
  const navigate = useNavigate();
  const toDoActions = ToDoActions();
  const [tasks, setTasks] = useState([]);
  let data = useSelector((state) => {
    return state.tasks;
  });
  useEffect(() => {
    setTasks(data);
  }, [data]);

  const deleteTask = (taskId) => {
    toDoActions.deleteTask(taskId);
  };

  const viewOrEditTask = (task, isViewMode) => {
    toDoActions.setTask(task);
    navigate(`/task/${isViewMode}`);
  };

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Task Name</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.length > 0 &&
            tasks.map((task) => {
              return (
                <tr key={task.taskId}>
                  <td>{task.taskId}</td>
                  <td>{task.taskName}</td>
                  <td>{task.taskStatus}</td>
                  <td>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                      <button
                        className="btn btn-outline-warning"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Edit"
                        onClick={() => viewOrEditTask(task, 1)}
                      >
                        <i className="bi bi-pen"></i>
                      </button>
                      &nbsp;&nbsp;
                      <button
                        className="btn btn-outline-primary"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="View"
                        onClick={() => viewOrEditTask(task, 0)}
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                      &nbsp;&nbsp;
                      <button
                        className="btn btn-outline-success"
                        data-toggle="tooltip"
                        data-placement="top"
                        title={
                          task.taskStatus === "COMPLETED"
                            ? "Mark As Incomplete"
                            : "Mark As Completed"
                        }
                        onClick={() => {
                          toDoActions.updateTaskStatus(task.taskId);
                        }}
                      >
                        {task.taskStatus === "COMPLETED" ? (
                          <i className="bi bi-check-circle-fill"></i>
                        ) : (
                          <i className="bi bi-check"></i>
                        )}
                      </button>
                      &nbsp;&nbsp;
                      <button
                        className="btn btn-outline-danger"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Remove"
                        onClick={() => {
                          deleteTask(task.taskId);
                        }}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <>
        <button
          className="btn btn-sm btn-warning"
          onClick={() => {
            toDoActions.resetTaskList();
          }}
        >
          Reset
        </button>
      </>
    </div>
  );
};

export default List;
