const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pern_todo_db', 'postgres', '123', {
    host: 'localhost',
    dialect: 'postgres',
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

module.exports = {
    sequelize,
    connectDB,
};