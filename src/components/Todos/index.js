import React, { useState } from "react";
import AddTodos from "./AddTodos";
import TodoList from "./TodoList";
import Status from "./Status";

function Todos() {
  const [todo, setTodo] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <AddTodos addTodo={setTodo} todo={todo} />
        </header>
        <TodoList
          todo={todo}
          activeCategory={activeCategory}
          checkedTodo={setTodo}
          removeTodo={setTodo}
        />
        <Status
          todo={todo}
          removeTodo={setTodo}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
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
