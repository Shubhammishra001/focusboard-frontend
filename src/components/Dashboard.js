import React from "react";
import AdminMenu from "./AdminMenu";
import UserProfile from "./UserProfile";
import { getRole, logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const role = getRole();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h2>Welcome {role}</h2>
      <button onClick={handleLogout}>Logout</button>
      {role === "ADMIN" ? <AdminMenu /> : <UserProfile />}
    </div>
  );
};

export default Dashboard;
