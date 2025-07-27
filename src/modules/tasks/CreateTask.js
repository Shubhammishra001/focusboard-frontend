import React, { useState, useEffect } from "react";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [assignedTo, setAssignedTo] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees from API or use dummy data
    const fetchEmployees = async () => {
      const token = localStorage.getItem("token");
      // Replace with your API URL
      const res = await fetch("/api/employees", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setEmployees(data);
      } else {
        // Fallback dummy data
        setEmployees([
          { id: "1", name: "Alice" },
          { id: "2", name: "Bob" },
        ]);
      }
    };
    fetchEmployees();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    // Replace with your API endpoint
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description, priority, assignedTo }),
    });

    if (res.ok) {
      alert("Task created!");
      setTitle("");
      setDescription("");
      setPriority("Medium");
      setAssignedTo("");
    } else {
      alert("Failed to create task");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Create New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Priority</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-semibold">Assign to</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            required
          >
            <option value="">Select Employee</option>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
