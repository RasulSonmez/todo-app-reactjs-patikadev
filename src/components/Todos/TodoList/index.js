import React from "react";

function TodoList({ todo, checkedTodo, removeTodo, activeCategory }) {
  //to check the listed todos
  const handleCheckbox = (itemIndex) => {
    checkedTodo(
      todo.map((todo, i) => {
        if (itemIndex === i) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );
  };

  const removeItem = (itemId) =>
    removeTodo(todo.filter((item) => item.id !== itemId));

  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {todo.map((todo, id) =>
            activeCategory == "All" ||
            (activeCategory == "Active" && todo.complate == false) ||
            (activeCategory == "Completed" && todo.complate == true) ? (
              <li key={todo.id} className={todo.isCompleted ? "completed" : ""}>
                <div className="view">
                  <input
                    className="toggle"
                    onChange={() => handleCheckbox(id)}
                    type="checkbox"
                  />
                  <label>{todo.todo}</label>
                  <button
                    onClick={() => removeItem(todo.id)}
                    className="destroy"
                  ></button>
                </div>
              </li>
            ) : null
          )}
        </ul>
      </section>
    </div>
  );
}

export default TodoList;
