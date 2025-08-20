const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

// Route to get all tasks
router.get('/', tasksController.getAllTasks);

// Route to create a new task
router.post('/', tasksController.createTask);

// Route to update a task by ID
router.put('/:id', tasksController.updateTask);

// Route to delete a task by ID
router.delete('/:id', tasksController.deleteTask);

module.exports = router;