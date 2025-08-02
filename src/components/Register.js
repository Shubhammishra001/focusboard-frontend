import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    loginId: "",
    password: "",
    username: "",
    email: "",
    tenantId: "",
    role: "USER", // default
    active: true,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users/register", formData);
      alert("Registration successful! You can now log in.");
      navigate("/"); // redirect to login page
    } catch (err) {
      alert("Registration failed. Check input or try a different login ID.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        name="loginId"
        placeholder="Login ID"
        value={formData.loginId}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />


      <input
        type="text"
        name="username"
        placeholder="Full Name"
        value={formData.username}
        onChange={handleChange}
        required
      />
         <input
        type="text"
        name="role"
        placeholder="role"
        value={formData.role}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="tenantId"
        placeholder="Tenant ID"
        value={formData.tenantId}
        onChange={handleChange}
        required
      />
      {/* Optional dropdown for role */}
      {/* <select name="role" onChange={handleChange}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
      </select> */}
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
