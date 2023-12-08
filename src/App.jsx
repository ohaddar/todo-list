import { useState } from "react";
import TodoList from "./components/Todo-list";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
