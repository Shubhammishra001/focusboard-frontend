import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";
import { saveAuthData } from "../utils/auth";

const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/login", { loginId, password });
      const { token, role } = res.data;

      saveAuthData(token, role);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Login ID"
        value={loginId}
        onChange={(e) => setLoginId(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
    
  );
  <p>Don't have an account? <a href="/register">Register</a></p>

};

export default Login;
