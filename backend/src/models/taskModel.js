const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/index');

const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('Pending', 'Ongoing', 'Completed'),
        defaultValue: 'Pending',
    },
    deadline: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    timestamps: true,
});

module.exports = Task;