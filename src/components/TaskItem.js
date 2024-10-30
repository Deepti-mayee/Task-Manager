// components/TaskItem.js
import React, { useState } from 'react';

function TaskItem({ task, onUpdate, onDelete }) {
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
                    />
                    <textarea 
                        value={updatedTask.description} 
                        onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })} 
                    />
                    <button onClick={handleUpdate}>Save</button>
                </div>
            ) : (
                <div>
                    <h3>{task.name}</h3>
                    <p>{task.description}</p>
                    <p>Status: {task.status}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => onDelete(task.id)} className="delete-button">Delete</button>
                </div>
            )}
        </div>
    );
}

export default TaskItem;
