import { useState } from "react";

function EditTodoForm({ handleModify, todo, id }) {
  const [inputValue, setinputValue] = useState(todo.todo || "");
  const handleChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleModify(inputValue, id);
  };
  return (
    <form onSubmit={handleSubmit} className="TodoFormEdit">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Update Your task..."
        className="Todo-input"
      />
      <button type="submit" className="todo-button">
        Save
      </button>
    </form>
  );
}
export default EditTodoForm;
