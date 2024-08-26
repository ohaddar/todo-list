import { useEffect, useState } from "react";
import TodoList from "./components/Todo-list";
import "./App.css";
import InputForm from "./components/Input-form";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [grouppedList, setGrouppedList] = useState([]);
  const [dateMode, setDateMode] = useState(true);
  const [todos, setTodos] = useState([]);

  const groupByDate = () => {
    const groupped = {};

    todoList.forEach((todo) => {
      if (!groupped[todo.date]) {
        groupped[todo.date] = [];
      }
      groupped[todo.date].push(todo);
    });

    return groupped;
  };

  const showTodoList = (date) => {
    setTodos(grouppedList[date]);
  };

  useEffect(() => {
    setGrouppedList(groupByDate());
  }, [todoList]);

  useEffect(() => {
    todoList.length > 0 && showTodoList(todoList[todoList.length - 1].date);
    todoList.length === 0 && setTodos([]);
  }, [grouppedList]);

  return (
    <div className="container">
      <div className="SubContainer">
        <h1>Organize Your Days !</h1>
        <InputForm todoList={todoList} setTodoList={setTodoList} />
      </div>
      <div className="subOfSubContainer">
        <div className="PrinciplDateDiv">
          {grouppedList &&
            Object.keys(grouppedList).map((date, index) => (
              <div
                key={index}
                className="DivDate"
                onClick={() => showTodoList(date)}
              >
                {date}
              </div>
            ))}
        </div>
        {todoList && (
          <TodoList
            todos={todos}
            todoList={todoList}
            setTodoList={setTodoList}
            dateMode={dateMode}
            setDateMode={setDateMode}
          />
        )}
      </div>
    </div>
  );
}

export default App;
