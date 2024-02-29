import { useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import { v4 as uuidv4 } from "uuid";

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
export default InputForm;
