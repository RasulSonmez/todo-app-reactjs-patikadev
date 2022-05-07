function TodoList({
  date,
  todo,
  checkedTodo,
  removeTodo,
  filteredTodo,
  editTodo,
  editId,
  handleEditChange,
  inputValue,
  setInputValue,
}) {
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

                {editId === todo.id ? (
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                ) : (
                  <>
                    <label>{todo.todo}</label>
                    <label className="itemDate">{date}</label>
                  </>
                )}
                {editId === todo.id ? (
                  <>
                    <button
                      className="edit1"
                      onClick={() => editTodo(todo.id, inputValue)}
                    >
                      Edit todo
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="edit1"
                      onClick={() => handleEditChange(todo.id, todo.todo)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeItem(todo.id)}
                      className="destroy"
                    ></button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default TodoList;
