import React, {useState} from "react";

function TaskItem({task, onUpdate}) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(task);

    const handleUpdate = () =>{
        onUpdate(updatedTask);
        setIsEditing(false);
    };

    return(
        <div>
            {isEditing ? (
                <div>
                    <input 
                        type="text" 
                        value={updatedTask.name} 
                        onChange={(e) => setUpdatedTask({...updatedTask, name: e.target.value})}/>
                    <textarea
                        value={updatedTask.description}
                        onChange={(e) => setUpdatedTask({...updatedTask, description: e.target.value})}
                        />
                    <button onClick={handleUpdate}>Save</button>
                </div>
            ) : (
                <div>
                    <h2>{task.name}</h2>
                    <p>{task.description}</p>
                    <p>Status: {task.status}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>

                </div>
            )}
        </div>
    )
}

export default TaskItem;