import React from "react";

function TodoList({ date, todo, checkedTodo, removeTodo, filteredTodo }) {
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
          {filteredTodo.map((todo, id) => (
            <li key={todo.id} className={todo.isCompleted ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  onChange={() => handleCheckbox(id)}
                  type="checkbox"
                />
                <label>
                  {todo.todo} <span className="itemDate">{date}</span>
                </label>
                <button
                  onClick={() => removeItem(todo.id)}
                  className="destroy"
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default TodoList;
