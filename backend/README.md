# PERN To-Do List Application

## Overview
This is a To-Do List application built using the PERN stack (PostgreSQL, Express.js, React, Node.js). The application allows users to manage their tasks effectively by providing features to create, update, delete, and filter tasks based on their status.

## Backend

### Technologies Used
- Node.js
- Express.js
- PostgreSQL
- Sequelize (for ORM)

### Setup Instructions
1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd pern-todo-app/backend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up the PostgreSQL database:**
   - Create a PostgreSQL database for the application.
   - Update the database connection details in `src/db/index.js`.

4. **Run the application:**
   ```
   npm start
   ```

### API Endpoints
- `GET /api/tasks` - Retrieve all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update an existing task
- `DELETE /api/tasks/:id` - Delete a task

## Frontend

### Technologies Used
- React
- Axios (for API calls)

### Setup Instructions
1. **Navigate to the frontend directory:**
   ```
   cd pern-todo-app/frontend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

### Features
- View all tasks, completed tasks, ongoing tasks, and pending tasks.
- Create new tasks and update existing ones.
- Filter tasks based on their status.

## Additional Notes
- Ensure that the backend server is running before starting the frontend application.
- The application is designed to be user-friendly and responsive.

## License
This project is licensed under the MIT License.