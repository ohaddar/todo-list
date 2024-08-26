import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import PropTypes from "prop-types";

function TodoList({ todoList, setTodoList, todos }) {
  const handleDelete = (id) => {
    const updatedList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedList);
  };
  const handleModify = (todo, id) => {
    const ModifyedList = todoList.map((todos) =>
      todos.id === id ? { ...todos, todo, isEditing: !todos.isEditing } : todos
    );
    setTodoList(ModifyedList);
  };
  const toggleComplete = (id) => {
    setTodoList(
      todoList.map((todos) =>
        todos.id === id ? { ...todos, completed: !todos.completed } : todos
      )
    );
  };
  const editTodo = (id) => {
    setTodoList(
      todoList.map((todos) =>
        todos.id === id ? { ...todos, isEditing: !todos.isEditing } : todos
      )
    );
  };

  return (
    <div className="TodoList">
      {/* display todos  */}
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm
            handleModify={handleModify}
            todo={todo}
            key={index}
            id={todo.id}
          />
        ) : (
          <Todo
            key={index}
            task={todo}
            handleDelete={handleDelete}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
            sss
          />
        )
      )}
    </div>
  );
}
TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      todo: PropTypes.string.isRequired,
      isEditing: PropTypes.bool,
      completed: PropTypes.bool,
    })
  ),
  setTodoList: PropTypes.func,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      todo: PropTypes.string,
      isEditing: PropTypes.bool,
      completed: PropTypes.bool,
    })
  ),
};
export default TodoList;
