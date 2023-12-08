function Input({ inputValue, setInputValue, addedValue, setAddedValue }) {
  const handleChange = (event) => {
    inputValue = event.target.value;
    setInputValue(inputValue);
  };
  const handleClick = (event) => {
    event.preventDefault();
    if (inputValue === "") return;
    setAddedValue([...addedValue, inputValue]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleClick}>
      <input
        type="text"
        placeholder="todo"
        onChange={handleChange}
        value={inputValue}
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default Input;
