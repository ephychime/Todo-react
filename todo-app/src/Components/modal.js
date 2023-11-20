import React, { useState } from "react";
import "./modal.css";



function Modal({ setOpenModal, onTaskAdd }) {
  const [input, setInput] = useState("");
  
  //functions to add todos
  const addTodo = () => {
    if (input.trim() !== "") {
      const newTodo = {
        id: Math.random(),
        todo: input,
      };

      onTaskAdd(newTodo);
      setInput("");
      // closes the modal after filling the task;
      setOpenModal(false);
    }
  };

  return (
    <div className="modalBackground">
      <div className="titleCloseBtn">
        <button onClick={() => setOpenModal(false)}>X</button>
      </div>
      <div className="modalContainer">
        <h1 className="text">Add TODO</h1>
        <p className="">Title</p>
        <form >
          <input
            type="text"
            required
            className="field"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <p className="">Status</p>
          <select
            className="field">
            <option value="Incomplete">Incomplete</option>
            <option value="Complete">Complete</option>
          </select>
          <div className="footer">
            <button type="button" onClick={addTodo}>
              Add Task
            </button>
            <button onClick={() => setOpenModal(false)} className="cancelBtn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;



