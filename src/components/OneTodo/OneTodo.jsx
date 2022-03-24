import React from "react";
import "./OneTodo.css";

const OneTodo = ({ item, delTodo, funcForEdit, changeStatus }) => {
  return (
    <li className={item.status === true ? "completed" : ""}>
      <input type="checkbox" onChange={() => changeStatus(item.id)} />
      {item.title}
      <button className="button" onClick={() => delTodo(item.id)}>
        DELETE
      </button>
      <button
        className="button"
        onClick={() => funcForEdit(item)}
        disabled={item.status === true ? true : false}
      >
        EDIT
      </button>
    </li>
  );
};

export default OneTodo;
