import React from "react";

function Status({ todo, removeTodo, filterType, setFilterType, filteredTodo }) {
  const clearCompleted = () =>
    removeTodo(todo.filter((item) => !item.isCompleted));

  let todoCompleted = 0;
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].isCompleted) {
      todoCompleted++;
    }
  }

  return (
    <div>
      <footer className={todo.length === 0 ? "hidden" : "footer"}>
        <span className="todo-count">
          <strong>{filteredTodo.length} </strong>
          item{todo.length > 1 && "s"} left
        </span>

        <ul className="filters">
          <li>
            <button
              className={filterType === "All" ? "selected" : ""}
              onClick={() => setFilterType("All")}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={filterType === "Active" ? "selected" : ""}
              onClick={() => setFilterType("Active")}
            >
              Active
            </button>
          </li>
          <li>
            <button
              className={filterType === "Completed" ? "selected" : ""}
              onClick={() => setFilterType("Completed")}
            >
              Completed
            </button>
          </li>
        </ul>

        <button
          onClick={clearCompleted}
          className={todoCompleted === 0 ? "hidden" : "clear-completed"}
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default Status;
