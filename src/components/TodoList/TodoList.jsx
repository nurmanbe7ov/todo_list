import React from "react";
import OneTodo from "../OneTodo/OneTodo";
import "./TodoLIst.css";

const TodoList = ({ works, delTodo, funcForEdit, changeStatus }) => {
  return (
    <ol className="olka">
      {works?.length && works.length > 0 ? (
        works.map((item) => (
          <OneTodo
            delTodo={delTodo}
            key={item.id}
            item={item}
            funcForEdit={funcForEdit}
            changeStatus={changeStatus}
          />
        ))
      ) : (
        <h1>No works to do</h1>
      )}
    </ol>
  );
};

export default TodoList;
