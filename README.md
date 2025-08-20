# PERN To-Do List Application

This project is a To-Do List application built using the PERN stack (PostgreSQL, Express.js, React, Node.js). It allows users to manage their tasks efficiently with features such as filtering tasks based on their status.

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

The backend is built with Node.js and Express.js and connects to a PostgreSQL database. The structure is as follows:

- **src**
  - **controllers**: Contains the logic for handling task-related requests.
    - `tasksController.js`: Functions for getting, creating, updating, and deleting tasks.
  - **models**: Defines the data structure for tasks.
    - `taskModel.js`: Task schema for PostgreSQL.
  - **routes**: Sets up the API endpoints.
    - `tasksRoutes.js`: Routes for task-related operations.
  - **db**: Handles the database connection.
    - `index.js`: Exports the database connection instance.
  - `app.js`: Entry point for the backend application.

### Frontend

The frontend is built with React and provides a user interface for interacting with the To-Do List. The structure is as follows:

- **src**
  - **components**: Contains reusable components for the application.
    - `TaskList.jsx`: Displays a list of tasks.
    - `TaskFilter.jsx`: Allows users to filter tasks by status.
    - `TaskForm.jsx`: Provides a form for creating and updating tasks.
  - **pages**: Contains the main pages of the application.
    - `Dashboard.jsx`: Main dashboard integrating task list and filter.
  - `App.jsx`: Main component that sets up routing.
  - `index.js`: Entry point for the React application.

## Setup Instructions

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Set up the PostgreSQL database and update the connection details in `backend/src/db/index.js`.
4. Start the backend server:
   ```
   npm start
   ```

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm start
   ```

## API Endpoints

- `GET /api/tasks`: Retrieve all tasks.
- `POST /api/tasks`: Create a new task.
- `PUT /api/tasks/:id`: Update an existing task.
- `DELETE /api/tasks/:id`: Delete a task.

## Additional Notes

- Ensure that PostgreSQL is running and accessible.
- The application supports filtering tasks by status: All, Completed, Ongoing, and Pending.

## License

This project is licensed under the MIT License.