import { React, useState, useNavigate } from "../../utils/Imports";
import { Heading, BackButton, Input, ToDoActions } from "../../utils/Imports";

const AddTask = () => {
  const navigate = useNavigate();
  const toDoActions = ToDoActions();
  const [task, setTask] = useState({ taskName: "", taskDescription: "" });
  const addTask = () => {
    toDoActions.addTask(task);
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
      <Heading heading={"Add Task"} />
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Input
          type="text"
          disabled={false}
          label={"Task Name"}
          placeholder="Enter Task Name"
          value={task.taskName}
          onChange={onTaskChange}
        />
        <br />
        <Input
          type="text"
          disabled={false}
          label={"Task Description"}
          placeholder="Enter Task Description"
          value={task.taskDescription}
          onChange={onTaskChange}
        />
        <br />
        <div className="d-flex flex-row">
          <button className="btn btn-sm btn-primary" onClick={addTask}>
            Add Task
          </button>{" "}
          &nbsp;&nbsp;
          <BackButton link={"/"} />
        </div>
      </div>
    </div>
  );
};

export default AddTask;
