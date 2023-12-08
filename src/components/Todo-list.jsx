import { useState } from "react";
import Input from "./Input";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [addedValue, setAddedValue] = useState([]);

  const handleDelete = (index) => {
    const updatedList = addedValue.filter(
      (item, itemIndex) => itemIndex !== index
    );
    setAddedValue(updatedList);
  };

  const listItems = addedValue.map((item, index) => (
    <h3 key={index}>
      {item}
      <button onClick={() => handleDelete(index)}>Delete</button>
    </h3>
  ));
  return (
    <div>
      <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
        addedValue={addedValue}
        setAddedValue={setAddedValue}
      ></Input>
      {listItems}
    </div>
  );
}
export default TodoList;
