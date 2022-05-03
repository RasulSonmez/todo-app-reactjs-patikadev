import React, { useState, useEffect } from "react";

const initialFormValue = { id: "", todo: "", isCompleted: false };

function AddTodos({ todo, addTodo }) {
  const [form, setForm] = useState(initialFormValue);

  const [itemId, setItemId] = useState(1);

  //getting values ​​from input
  const handleChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value, id: itemId });
  };

  //input will be clear
  useEffect(() => {
    setForm(initialFormValue);
  }, [todo]);

  //not re-flooding the page, enter is todo and not entering a null value
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.todo === "") {
      alert("you should addtask...");
    } else {
      setItemId(itemId + 1);
      addTodo([...todo, form]);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="todo"
          value={form.todo}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={handleChangeInput}
        />
      </form>
    </div>
  );
}

export default AddTodos;
