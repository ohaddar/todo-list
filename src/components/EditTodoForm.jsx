import { useState } from "react";
import PropTypes from "prop-types";

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
EditTodoForm.propTypes = {
  handleModify: PropTypes.func,
  todo: PropTypes.shape({
    todo: PropTypes.string,
  }),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default EditTodoForm;
