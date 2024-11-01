// components/TaskItem.js
import React, { useState } from 'react';

function TaskItem({ task, onUpdate, onDelete, onToggleStatus }) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(task);

    const handleUpdate = () => {
        onUpdate(updatedTask);
        setIsEditing(false);
    };

    return (
        <div className="task-item">
            {isEditing ? (
                <div>
                    <input 
                        type="text" 
                        value={updatedTask.name} 
                        onChange={(e) => setUpdatedTask({ ...updatedTask, name: e.target.value })}
                        placeholder='Task Name'
                        className='edit-input' 
                    />
                    <textarea 
                        value={updatedTask.description} 
                        onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
                        placeholder='Task Description'
                        className='edit-textarea' 
                    />
                    <button onClick={handleUpdate} className='save-button'>Save</button>
                    <button onClick={()=> setIsEditing(false)} className='cancel-button'>Cancel</button>
                </div>
            ) : (
                <div>
                    <h3>{task.name}</h3>
                    <p>{task.description}</p>
                    <p>Status: <span className={task.status === 'Completed' ? 'completed' : 'pending'}>{task.status}</span></p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => onToggleStatus(task.id)}>
                        Mark as {task.status === 'Pending' ? 'Completed' : 'Pending'}
                    </button>
                    <button onClick={() => onDelete(task.id)} className="delete-button">Delete</button>
                </div>
            )}
        </div>
    );
}

export default TaskItem;
