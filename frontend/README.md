# PERN To-Do List Application

This is a To-Do List application built using the PERN stack (PostgreSQL, Express.js, React, Node.js). The application allows users to manage their tasks effectively with features to create, update, delete, and filter tasks based on their status.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Backend

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Set up your PostgreSQL database and update the database connection details in `src/db/index.js`.

4. Start the backend server:
   ```
   npm start
   ```

### Frontend

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the frontend application:
   ```
   npm start
   ```

## Usage

Once both the backend and frontend servers are running, you can access the application in your web browser at `http://localhost:3000`. You can create, update, delete, and filter tasks based on their status.

## Features

- Create new tasks
- Update existing tasks
- Delete tasks
- Filter tasks by status:
  - All Tasks
  - Completed Tasks
  - Ongoing Tasks
  - Pending Tasks

## API Endpoints

### Tasks

- `GET /api/tasks` - Retrieve all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update an existing task
- `DELETE /api/tasks/:id` - Delete a task

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.