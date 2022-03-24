import "./App.css";

import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import EditTodo from "./components/EditTodo/EditTodo";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  const [works, setWorks] = useState([
    { id: 1, title: "DO TODO LIST" },
    { id: 2, title: "TODO NOTHING" },
  ]);
  const [editModal, setEditModal] = useState(false);
  const [currentWork, setCurrentWork] = useState({});

  const addTodo = (newTodo) => {
    newTodo.id = Date.now();
    newTodo.status = false;
    let arr = [...works];
    arr.push(newTodo);
    setWorks(arr);
  };

  const delTodo = (id) => {
    let arr = works.filter((item) => {
      return item.id !== id;
    });
    setWorks(arr);
  };

  const funcForEdit = (workForEdit) => {
    setEditModal(true);
    setCurrentWork(workForEdit);
  };

  const saveEditedWork = (newWork) => {
    let arr = works.map((item) => {
      if (item.id === newWork.id) {
        return newWork;
      } else {
        return item;
      }
    });
    setWorks(arr);
  };

  const changeStatus = (id) => {
    console.log(id);
    let arr = works.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setWorks(arr);
  };

  return (
    <div className="App">
      <Navbar />
      <AddTodo addTodo={addTodo} />
      <TodoList
        delTodo={delTodo}
        works={works}
        funcForEdit={funcForEdit}
        changeStatus={changeStatus}
      />
      {editModal === true ? (
        <EditTodo
          setEditModal={setEditModal}
          currentWork={currentWork}
          saveEditedWork={saveEditedWork}
        />
      ) : null}
    </div>
  );
}

export default App;
