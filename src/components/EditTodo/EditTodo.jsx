import React, { useState } from "react";
import "./EditTodo.css";

const EditTodo = ({ currentWork, saveEditedWork, setEditModal }) => {
  const [inpEdit, setInpEdit] = useState(currentWork);
  const handleChange = (e) => {
    let obj = {
      ...inpEdit,
      [e.target.name]: [e.target.value],
    };
    setInpEdit(obj);
  };
  const handleSubmit = () => {
    saveEditedWork(inpEdit);
    setEditModal(false);
    setInpEdit({ id: null, title: "" });
  };
  return (
    <div className="modal">
      <div className="inner-modal">
        <h2>EDIT TODO</h2>
        <input
          className="inputs"
          onChange={(e) => handleChange(e)}
          value={inpEdit.title}
          type="text"
          name="title"
        />
        <button className="knopka" onClick={() => handleSubmit()}>
          Save
        </button>
        <button className="knopka" onClick={() => setEditModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EditTodo;
