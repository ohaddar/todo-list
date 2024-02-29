import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import { useEffect, useState } from "react";

function TodoList({ todoList, setTodoList, todos }) {
  const handleDelete = (id) => {
    const updatedList = todoList.filter((todo) => todo.id !== id);
    console.log("after delete", updatedList);
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
export default TodoList;
