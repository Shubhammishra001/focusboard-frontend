import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PrivateRoute from "./components/privateRoute";

import Dashboard from "./pages/Dashboard";

import Login from "./modules/user/Login";

import CreateTask from "./modules/tasks/CreateTask";
import TaskList from "./modules/tasks/TaskList";

import EmployeeList from "./modules/employees/EmployeeList";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Login />} />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            <Route
              path="/create-task"
              element={
                <PrivateRoute>
                  <CreateTask />
                </PrivateRoute>
              }
            />

            <Route
              path="/tasks"
              element={
                <PrivateRoute>
                  <TaskList />
                </PrivateRoute>
              }
            />

            <Route
              path="/employees"
              element={
                <PrivateRoute>
                  <EmployeeList />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
