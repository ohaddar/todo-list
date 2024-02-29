import { useForm } from "react-hook-form";
import React from "react";
import { v4 as uuidv4 } from "uuid";

function InputDateForm({ addTodo }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    addTodo(data.date);
    reset();
  };

  return (
    <input
      type="date"
      name="date"
      id={uuidv4()}
      className="Todo-input"
      {...register("date")}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
}
export default InputDateForm;
