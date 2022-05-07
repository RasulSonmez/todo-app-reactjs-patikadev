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

  const allTodoCompleted = () => {
    if (todo.every((item) => item.isCompleted)) {
      checkedTodo(
        todo.map((item) => {
          return { ...item, isCompleted: false };
        })
      );
    } else {
      checkedTodo(
        todo.map((item) => {
          if (item.isCompleted !== true) {
            return { ...item, isCompleted: true };
          }
          return { ...item };
        })
      );
    }
  };

  return (
    <div>
      <section className="main">
        <input
          onChange={() => allTodoCompleted()}
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
        />
        <label
          htmlFor="toggle-all"
          className={todo.length === 0 ? "hidden" : "show"}
        >
          Mark all as complete
        </label>

        <ul className="todo-list">
          {filteredTodo.map((todo, id) => (
            <li key={todo.id} className={todo.isCompleted ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  checked={todo.isCompleted}
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
