import { jwtDecode } from "jwt-decode"; // ✅ CORRECT


export function saveAuthData(token) {
  const decoded = jwtDecode(token);
  const role = decoded.role || decoded.authorities?.[0]?.authority || "USER"; // adjust based on your JWT
  const username = decoded.role|| decoded.sub || ""; // based on your JWT payload

  localStorage.setItem("token", token);
  localStorage.setItem("role", role);
  localStorage.setItem("username", username);
}

export function getRole() {
  return localStorage.getItem("role");
}

export function getUsername() {
  return localStorage.getItem("username");
}

export function isLoggedIn() {
  return !!localStorage.getItem("token");
}

export function logout() {
  localStorage.clear();
}
