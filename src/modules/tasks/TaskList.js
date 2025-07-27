import React, { useEffect, useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("token");
      // Replace with your API URL
      const res = await fetch("/api/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setTasks(data);
      } else {
        // Dummy fallback
        setTasks([
          {
            id: "1",
            title: "Fix login bug",
            priority: "High",
            assignedTo: "Alice",
          },
          {
            id: "2",
            title: "Design new homepage",
            priority: "Medium",
            assignedTo: "Bob",
          },
        ]);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">All Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left">Title</th>
              <th className="border px-4 py-2 text-left">Priority</th>
              <th className="border px-4 py-2 text-left">Assigned To</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(({ id, title, priority, assignedTo }) => (
              <tr key={id} className="even:bg-gray-100">
                <td className="border px-4 py-2">{title}</td>
                <td className="border px-4 py-2">{priority}</td>
                <td className="border px-4 py-2">{assignedTo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;
