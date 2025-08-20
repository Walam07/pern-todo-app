import React from 'react';

const TaskList = ({ tasks }) => {
    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span>{task.title}</span>
                        <span>{task.status}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;