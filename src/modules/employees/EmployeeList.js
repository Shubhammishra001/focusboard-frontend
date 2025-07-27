import React, { useEffect, useState } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
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
        // Dummy fallback
        setEmployees([
          { id: "1", name: "Alice Johnson", role: "Developer" },
          { id: "2", name: "Bob Smith", role: "Designer" },
        ]);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Employees</h2>
      {employees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        <ul className="space-y-3">
          {employees.map(({ id, name, role }) => (
            <li
              key={id}
              className="p-4 bg-white rounded shadow flex justify-between"
            >
              <span>{name}</span>
              <span className="text-gray-600 italic">{role}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
