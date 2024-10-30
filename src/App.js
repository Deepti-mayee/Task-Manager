// App.js
import React, { useState, useEffect } from 'react';
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

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
        toast.error('Task deleted successfully!');
    };

    // Polling Effect for Real-Time Updates
    useEffect(() => {
        const interval = setInterval(() => {
            setTasks((prevTasks) => [...prevTasks]); // Simulate task update
        }, 30000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div>
            <h1>Real-Time Task Manager</h1>
            <TaskForm onSubmit={addTask} />
            <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
}

export default App;
