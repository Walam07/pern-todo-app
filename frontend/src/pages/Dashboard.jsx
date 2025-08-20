import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:5001/api/tasks";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTasks(data);
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        deadline: deadline ? new Date(deadline) : null,
      }),
    });
    setTitle("");
    setDescription("");
    setDeadline("");
    fetchTasks();
  };

  const handleStatusChange = async (id, status) => {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchTasks();
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    return task.status === filter;
  });

  const statusColor = (status) => {
    switch (status) {
      case "Completed":
        return "#38b000";
      case "Ongoing":
        return "#ffb300";
      case "Pending":
        return "#e63946";
      default:
        return "#adb5bd";
    }
  };

  return (
    <div>
      <style>{`
        body { background: linear-gradient(135deg, #f8fafc 0%, #e0c3fc 100%); min-height: 100vh; }
        .dashboard-container {
          max-width: 700px;
          margin: 48px auto;
          background: rgba(255,255,255,0.95);
          border-radius: 18px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
          padding: 40px 36px 32px 36px;
          position: relative;
          overflow: hidden;
        }
        .dashboard-container::before {
          content: '';
          position: absolute;
          top: -60px; left: -60px;
          width: 180px; height: 180px;
          background: radial-gradient(circle, #a18cd1 0%, #fbc2eb 100%);
          opacity: 0.18;
          z-index: 0;
          border-radius: 50%;
        }
        h1 {
          color: #3a0ca3;
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 18px;
          letter-spacing: 1px;
        }
        .filter-row {
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        label {
          font-size: 1.1rem;
          color: #3a0ca3;
          font-weight: 600;
        }
        select, input, textarea {
          padding: 8px 16px;
          border-radius: 6px;
          border: 1.5px solid #b197fc;
          background: #f3f0ff;
          font-size: 1rem;
          color: #3a0ca3;
          font-weight: 500;
          outline: none;
          transition: border 0.2s;
        }
        select:focus, input:focus, textarea:focus {
          border: 1.5px solid #3a0ca3;
        }
        .task-list {
          margin-top: 24px;
        }
        h2 {
          color: #4361ee;
          font-size: 1.5rem;
          margin-bottom: 18px;
          font-weight: 700;
        }
        .task-item {
          background: linear-gradient(90deg, #fbc2eb 0%, #a6c1ee 100%);
          margin-bottom: 18px;
          padding: 20px 22px 16px 22px;
          border-radius: 12px;
          box-shadow: 0 2px 8px #0001;
          position: relative;
          transition: transform 0.12s;
        }
        .task-item:hover {
          transform: translateY(-2px) scale(1.01);
          box-shadow: 0 6px 18px #0002;
        }
        .task-title {
          font-weight: 700;
          font-size: 1.18rem;
          color: #22223b;
        }
        .task-status {
          float: right;
          font-size: 0.98em;
          font-weight: 600;
          padding: 3px 14px;
          border-radius: 12px;
          margin-left: 12px;
          background: #fff;
          box-shadow: 0 1px 4px #0001;
        }
        .task-desc {
          margin: 8px 0 6px 0;
          color: #3a0ca3;
          font-size: 1.05rem;
        }
        .task-deadline {
          font-size: 0.97rem;
          color: #495057;
        }
        .no-tasks {
          color: #e63946;
          font-size: 1.1rem;
          margin-top: 18px;
        }
        .add-task-form {
          background: #f3f0ff;
          border-radius: 10px;
          padding: 18px 18px 10px 18px;
          margin-bottom: 32px;
          box-shadow: 0 2px 8px #0001;
        }
        .add-task-form input, .add-task-form textarea {
          width: 100%;
          margin-bottom: 12px;
        }
        .add-task-form button {
          background: linear-gradient(90deg, #a18cd1 0%, #fbc2eb 100%);
          color: #3a0ca3;
          font-weight: 700;
          border: none;
          border-radius: 6px;
          padding: 8px 22px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .add-task-form button:hover {
          background: linear-gradient(90deg, #fbc2eb 0%, #a18cd1 100%);
        }
        .task-actions {
          margin-top: 10px;
          display: flex;
          gap: 10px;
        }
        .task-actions button, .task-actions select {
          font-size: 0.95rem;
          padding: 4px 10px;
          border-radius: 5px;
          border: 1px solid #b197fc;
          background: #fff;
          color: #3a0ca3;
          cursor: pointer;
        }
        .task-actions button:hover {
          background: #e63946;
          color: #fff;
          border: 1px solid #e63946;
        }
        @media (max-width: 600px) {
          .dashboard-container { padding: 18px 4vw; }
          h1 { font-size: 2rem; }
        }
      `}</style>
      <div className="dashboard-container">
        <h1>Task Dashboard</h1>
        <form className="add-task-form" onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={2}
          />
          <input
            type="date"
            value={deadline}
            onChange={e => setDeadline(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
        <div className="filter-row">
          <label htmlFor="filter">Filter Tasks:</label>
          <select
            id="filter"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            <option value="All">All Tasks</option>
            <option value="Completed">Completed Tasks</option>
            <option value="Ongoing">Ongoing Tasks</option>
            <option value="Pending">Pending Tasks</option>
          </select>
        </div>
        <div className="task-list">
          <h2>Task List</h2>
          {filteredTasks.length === 0 ? (
            <div className="no-tasks">No tasks found.</div>
          ) : (
            filteredTasks.map(task => (
              <div className="task-item" key={task.id}>
                <span className="task-title">{task.title}</span>
                <span
                  className="task-status"
                  style={{ background: statusColor(task.status), color: "#fff" }}
                >
                  {task.status}
                </span>
                <div className="task-desc">{task.description}</div>
                <div className="task-deadline">
                  <small>
                    Deadline: {task.deadline ? new Date(task.deadline).toLocaleDateString() : "N/A"}
                  </small>
                </div>
                <div className="task-actions">
                  <select
                    value={task.status}
                    onChange={e => handleStatusChange(task.id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                  </select>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;