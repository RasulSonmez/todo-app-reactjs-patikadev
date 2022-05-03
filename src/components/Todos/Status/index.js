import React from "react";

function Status({ todo, removeTodo, setActiveCategory, activeCategory }) {
  const clearCompleted = () =>
    removeTodo(todo.filter((item) => !item.isCompleted));

  return (
    <div>
      <footer className={todo.length === 0 ? "hidden" : "footer"}>
        <span className="todo-count">
          <strong>{todo.length} </strong>
          item{todo.length > 1 && "s"} left
        </span>

        <ul className="filters">
          <li>
            <button
              className={activeCategory === "All" ? "selected" : " "}
              onClick={() => setActiveCategory("All")}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={activeCategory === "Active" ? "selected" : " "}
              onClick={() => setActiveCategory("Active")}
            >
              Active
            </button>
          </li>
          <li>
            <button
              className={activeCategory === "Completed" ? "selected" : " "}
              onClick={() => setActiveCategory("Completed")}
            >
              Completed
            </button>
          </li>
        </ul>

        <button onClick={clearCompleted} className="clear-completed">
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default Status;
