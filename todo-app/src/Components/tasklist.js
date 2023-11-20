// TaskList.js
import React from "react";
import "./modal.css";

function TaskList({ tasks }) {
  return (
    <div>
        <div className="listbox">
       <div>
       <ul className="innerlist">
      {tasks.map((task) => (
        <li key={task.id} className="wrapper">
          {task.todo}
        </li>
      ))}
    </ul>
       </div>
    
        </div>

    </div>
    
  );
}

export default TaskList;


