// components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onUpdate, onDelete, onToggleStatus }) {
    return (
        <div>
            {tasks.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                tasks.map(task => (
                    <TaskItem key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} onToggleStatus={onToggleStatus} />
                ))
            )}
        </div>
    );
}

export default TaskList;
