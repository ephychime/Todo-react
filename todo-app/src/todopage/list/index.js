import react from 'react';

function Listtodo (){
    return(
<div className='page'>
    <h1 className='heading'>TODO LIST</h1>
    <div className='second'>
        <button className='btn'>Add Task</button>
    <select className='drop-dwn'>
    <option>All</option>
    <option>Incomplete</option>
    <option>Completed</option>
  </select>
    </div>
    <div className='third-box'>
        <p className='inner-box'>No Todos</p>
    </div>
   </div> 
     );
   
}

export default Listtodo;