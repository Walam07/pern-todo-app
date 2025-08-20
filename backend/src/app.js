const express = require('express');
const cors = require('cors');
const db = require('./db/index');
const Task = require('./models/taskModel');
const tasksRoutes = require('./routes/tasksRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use('/api/tasks', tasksRoutes);

app.get('/', (req, res) => {
    res.send('PERN To-Do API is running');
});

db.connectDB()
    .then(() => Task.sync())
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Failed to start server:', err);
    });