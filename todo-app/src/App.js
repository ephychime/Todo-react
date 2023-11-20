
import React, { useState } from "react";
import "./App.css";
import Modal from "./Components/modal";
import TaskList from "./Components/tasklist";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="page">
      <h1 className="heading">TODO LIST</h1>
      <div className="second">
        <button
          className="btn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Add Task
        </button>
        <select className="drop-dwn">
          <option>All</option>
          <option>Incomplete</option>
          <option>Completed</option>
        </select>
        {modalOpen && <Modal setOpenModal={setModalOpen} onTaskAdd={addTask} />}
      </div>

      <div className='third-box'>
      {tasks.length === 0 ? <p className='inner-box'>No Todos</p> :  <TaskList tasks={tasks} />}
      
    </div>
    
     
    </div>
  );
}

export default App;
