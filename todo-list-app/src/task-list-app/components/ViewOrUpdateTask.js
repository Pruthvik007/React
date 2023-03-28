import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Heading, Input, BackButton, ToDoActions } from "../../utils/Imports";
const Task = () => {
  let initialTask = useSelector((state) => {
    return state.task;
  });
  let { isEditMode } = useParams();
  const toDoActions = ToDoActions();
  const navigate = useNavigate();
  const [task, setTask] = useState(initialTask);
  const addTask = () => {
    toDoActions.addTask(task);
    navigate("/tasksList");
  };

  const editTask = () => {
    toDoActions.updateTask(task);
    navigate("/tasksList");
  };

  const onTaskChange = (fieldName, value) => {
    if (fieldName === "Task Name") {
      setTask({ ...task, taskName: value });
    } else if (fieldName === "Task Description") {
      setTask({ ...task, taskDescription: value });
    }
  };

  return (
    <div>
      {isEditMode === "1" ? (
        <Heading heading={"Update Task"} />
      ) : (
        <Heading heading={"Task Details"} />
      )}
      <div className="d-flex align-items-center justify-content-center">
        <div className="">
          <Input
            type="text"
            disabled={isEditMode === "0"}
            label={"Task Name"}
            placeholder="Enter Task Name"
            value={task.taskName}
            onChange={onTaskChange}
          />
          <br />
          <Input
            type="text"
            disabled={isEditMode === "0"}
            label={"Task Description"}
            placeholder="Enter Task Description"
            value={task.taskDescription}
            onChange={onTaskChange}
          />
          <br />
          <div className="d-flex align-items-center justify-content-center">
            {isEditMode === "1" && (
              <button
                className="btn btn-sm btn-primary"
                onClick={() => {
                  editTask();
                }}
              >
                Update Task
              </button>
            )}{" "}
            &nbsp;&nbsp;
            {!initialTask && (
              <button
                className="btn btn-sm btn-primary"
                onClick={() => {
                  addTask();
                }}
              >
                Add Task
              </button>
            )}{" "}
            &nbsp;&nbsp;
            <BackButton link="/tasksList" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
