const Task = require('../models/taskModel');

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving tasks', error });
    }
};

// Create a new task
exports.createTask = async (req, res) => {
    const { title, description, status, deadline } = req.body;
    try {
        const newTask = await Task.create({ title, description, status, deadline });
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
};

// Update a task
exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, status, deadline } = req.body;
    try {
        const updatedTask = await Task.update({ title, description, status, deadline }, {
            where: { id }
        });
        if (updatedTask[0] === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTask = await Task.destroy({
            where: { id }
        });
        if (deletedTask === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
};