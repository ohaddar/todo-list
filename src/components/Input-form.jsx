import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

function InputForm({ todoList, setTodoList }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.id = uuidv4();
    data.isEditing = false;
    setTodoList([...todoList, data]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="TodoForm">
      <input
        type="date"
        name="date"
        id={uuidv4()}
        className="Todo-input"
        {...register("date", { required: true })}
      />
      {errors.date && <p>Ce champ est requis.</p>}

      <input
        type="text"
        placeholder="Add New Task..."
        {...register("todo", { required: true })}
        className="Todo-input"
        name="todo"
        id={uuidv4()}
      />
      {errors.todo && <p>Ce champ est requis.</p>}

      <button type="submit" className="todo-button">
        ADD
      </button>
    </form>
  );
}
InputForm.propTypes = {
  todoList: PropTypes.array,
  setTodoList: PropTypes.func,
};

export default InputForm;
