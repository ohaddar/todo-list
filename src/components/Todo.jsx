import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, handleDelete, editTodo, toggleComplete }) => {
  return (
    <div className="TodoDiv">
      <div className="Todo">
        <p
          className={`${task.completed ? "completed" : "incompleted"}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.todo}
        </p>
        <div>
          <FontAwesomeIcon
            className="edit-icon"
            icon={faPenToSquare}
            onClick={() => editTodo(task.id)}
          />
          <FontAwesomeIcon
            className="delete-icon"
            icon={faTrash}
            onClick={() => handleDelete(task.id)}
          />
        </div>
      </div>
    </div>
  );
};
export default Todo;
