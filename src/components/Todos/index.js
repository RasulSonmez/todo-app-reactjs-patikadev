import React, { useState, useEffect } from "react";
import AddTodos from "./AddTodos";
import TodoList from "./TodoList";
import Status from "./Status";

function Todos() {
  const [todo, setTodo] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [filteredTodo, setFilteredTodo] = useState(todo);
  const [date, setDate] = useState(null);
  const [editId, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");

  //filtered todo statu
  useEffect(() => {
    if (filterType === "Active") {
      setFilteredTodo(todo.filter((item) => item.isCompleted === false));
    } else if (filterType === "Completed") {
      setFilteredTodo(todo.filter((item) => item.isCompleted));
    } else {
      setFilteredTodo(todo);
    }
  }, [filterType, todo]);

  useEffect(() => {
    let today = new Date();
    let date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    setDate(date);
  }, []);

  const editTodo = (id, text) => {
    let editTodos = todo.map((todo) => {
      if (todo.id === id) {
        todo.todo = text;
      }
      return todo;
    });
    setTodo(editTodos);
    setEdit(false);
  };

  const handleEditChange = (id, text) => {
    setEdit(id);
    setInputValue(text);
  };
  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <div className="date">{date}</div>
          <AddTodos addTodo={setTodo} todo={todo} />
        </header>
        <TodoList
          date={date}
          todo={todo}
          checkedTodo={setTodo}
          removeTodo={setTodo}
          filteredTodo={filteredTodo}
          editTodo={editTodo}
          editId={editId}
          handleEditChange={handleEditChange}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Status
          todo={todo}
          removeTodo={setTodo}
          filteredTodo={filteredTodo}
          filterType={filterType}
          setFilterType={setFilterType}
        />
      </section>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default Todos;
