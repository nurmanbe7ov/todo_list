import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = ({ addTodo }) => {
  let [newWork, setNewWorkd] = useState({
    id: null,
    title: "",
  });
  let handleChange = (event) => {
    let obj = {
      ...newWork,
      [event.target.name]: event.target.value,
    };

    setNewWorkd(obj);
  };
  let handleSubmit = () => {
    if (!newWork.title.trim()) {
      alert("Заполните поле");
      return;
    }

    addTodo(newWork);
    setNewWorkd({
      id: null,
      title: "",
    });
  };

  return (
    <div>
      <h2>ADD NEW TODO</h2>
      <input
        className="input"
        name="title"
        value={newWork.title}
        onChange={(event) => handleChange(event)}
        type="text"
      />
      <button className="btn" onClick={() => handleSubmit()}>
        ADD
      </button>
    </div>
  );
};

export default AddTodo;
