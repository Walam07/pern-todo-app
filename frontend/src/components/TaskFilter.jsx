import React, { useState } from 'react';

const TaskFilter = ({ onFilterChange }) => {
    const [filter, setFilter] = useState('All');

    const handleFilterChange = (event) => {
        const selectedFilter = event.target.value;
        setFilter(selectedFilter);
        onFilterChange(selectedFilter);
    };

    return (
        <div>
            <label htmlFor="task-filter">Filter Tasks: </label>
            <select id="task-filter" value={filter} onChange={handleFilterChange}>
                <option value="All">All Tasks</option>
                <option value="Completed">Completed Tasks</option>
                <option value="Ongoing">Ongoing Tasks</option>
                <option value="Pending">Pending Tasks</option>
            </select>
        </div>
    );
};

export default TaskFilter;