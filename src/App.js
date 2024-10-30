// App.js
import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now() }]);
        toast.success('Task added successfully!');
    };

    const updateTask = (updatedTask) => {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
        toast.info('Task updated successfully!');
    };

    useEffect(()=>{
      const interval = setInterval(()=>{
        setTasks((prevTasks)=>{
          return [...prevTasks];
        })
      },30000);

      return()=> clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Real-Time Task Manager</h1>
            <TaskForm onSubmit={addTask} />
            <TaskList tasks={tasks} onUpdate={updateTask} />
            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
}

export default App;
