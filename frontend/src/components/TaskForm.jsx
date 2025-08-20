import React, { useState } from 'react';

const TaskForm = ({ onSubmit, existingTask }) => {
    const [taskName, setTaskName] = useState(existingTask ? existingTask.name : '');
    const [taskStatus, setTaskStatus] = useState(existingTask ? existingTask.status : 'Pending');
    const [taskDeadline, setTaskDeadline] = useState(existingTask ? existingTask.deadline : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = {
            name: taskName,
            status: taskStatus,
            deadline: taskDeadline,
        };
        onSubmit(taskData);
        setTaskName('');
        setTaskStatus('Pending');
        setTaskDeadline('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Task Name:</label>
                <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Status:</label>
                <select
                    value={taskStatus}
                    onChange={(e) => setTaskStatus(e.target.value)}
                >
                    <option value="Pending">Pending</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div>
                <label>Deadline:</label>
                <input
                    type="date"
                    value={taskDeadline}
                    onChange={(e) => setTaskDeadline(e.target.value)}
                />
            </div>
            <button type="submit">{existingTask ? 'Update Task' : 'Add Task'}</button>
        </form>
    );
};

export default TaskForm;