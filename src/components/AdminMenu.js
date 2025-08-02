import React from "react";
import { getRole } from "../utils/auth";

const AdminMenu = () => {
  const role = getRole();
    console.log(" role ",role);
  if (role !== "ADMIN") {
    return <p>Access Denied: Only admin can view this page.</p>;
  }

  return (
    <div>
      <h3>Admin Control Panel</h3>
      <ul>
        <li><a href="/users">View User List</a></li>
        <li><a href="/tasks">View Task List</a></li>
        <li><a href="/employees">View Employee List</a></li>
      </ul>
    </div>
  );
};

export default AdminMenu;
