import React, { useState } from 'react';
import "./TodoApp.css";

function TodoApp() { 
    const [task, setTask] = useState(''); //for storing the new task
    const [tasks, setTasks] = useState([]); //for storing the list of task

//Function to handle the input change
const  handleInputChange = (e) => {
    setTask(e.target.value);
};

//function to handle form Submission
const handleSubmit = (e) => {
    e.preventDefault();
    if(task.trim()) {
        setTasks([...tasks, task]); //Add new task to the task list
        setTask(''); //clear the input field
    }
};

//function to delete a task
const deleteTask =(index) =>{
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
};

return (
<div className='todo-app'>
    <h1>To-DO List</h1>
    <form onSubmit={handleSubmit}>
        <input
         type='text'
         value={task}
         onChange={handleInputChange}
         placeholder='Add a new Task...'
         required
        />
        <button type='submit'>Add Task</button>
    </form>
    <ul>
        {tasks.map((task, index) => (
            <li key={index}>
                {task}
                <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
        ))}
    </ul>

</div>
);
}

export default TodoApp
