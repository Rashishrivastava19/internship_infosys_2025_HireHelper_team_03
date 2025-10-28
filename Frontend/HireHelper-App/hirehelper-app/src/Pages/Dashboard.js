import React from "react";
import "./Dashboard.css";
import { FaTasks, FaCheckCircle, FaUsers, FaPlus } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">HireHelper</h2>
        <ul className="menu">
          <li className="active">Dashboard</li>
          <li>My Tasks</li>
          <li>Requests</li>
          <li>My Requests</li>
          <li>Add Task</li>
          <li>Settings</li>
          <li>Help & Support</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
          <p>Welcome back, John!</p>
          <input type="text" placeholder="Search tasks..." className="search-box" />
        </header>

        {/* Stats */}
        <section className="stats">
          <div className="stat-card">
            <FaTasks />
            <div>
              <h3>12</h3>
              <p>Active Tasks</p>
              <span>+3 this week</span>
            </div>
          </div>

          <div className="stat-card">
            <FaCheckCircle />
            <div>
              <h3>48</h3>
              <p>Completed</p>
              <span>+8 this month</span>
            </div>
          </div>

          <div className="stat-card">
            <FaTasks />
            <div>
              <h3>67</h3>
              <p>Total Tasks</p>
              <span>All time</span>
            </div>
          </div>

          <div className="stat-card">
            <FaUsers />
            <div>
              <h3>24</h3>
              <p>Helpers Hired</p>
              <span>+5 this month</span>
            </div>
          </div>
        </section>

        {/* Recent Tasks */}
        <section className="recent-tasks">
          <h2>Recent Tasks</h2>
          <div className="task">
            <div>
              <h3>Help moving furniture <span className="status in-progress">In Progress</span></h3>
              <p>Need assistance moving furniture to a new apartment on 3rd floor</p>
              <p><strong>Downtown, NYC</strong> - $80 - 2 hours ago</p>
              <p>Assigned to Alex Johnson</p>
            </div>
          </div>

          <div className="task">
            <div>
              <h3>Garden cleaning <span className="status open">Open</span></h3>
              <p>Help clean and organize backyard garden</p>
              <p><strong>Brooklyn, NYC</strong> - $50 - 5 hours ago</p>
            </div>
          </div>

          <div className="task">
            <div>
              <h3>Grocery shopping <span className="status in-progress">In Progress</span></h3>
              <p>Purchase groceries and deliver to home</p>
            </div>
          </div>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <button className="btn primary"><FaPlus /> Post New Task</button>
          <button className="btn">Browse Tasks</button>
          <button className="btn">Messages</button>
          <button className="btn">Notifications</button>
        </div>

        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <p>✅ Grocery shopping task was completed successfully</p>
          <small>2 hours ago</small>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
