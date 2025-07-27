import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const activeClass = "text-yellow-300";

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-10">FocusBoard</h1>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          "mb-4 hover:text-yellow-300 " + (isActive ? activeClass : "")
        }
      >
        🏠 Dashboard
      </NavLink>
      <NavLink
        to="/create-task"
        className={({ isActive }) =>
          "mb-4 hover:text-yellow-300 " + (isActive ? activeClass : "")
        }
      >
        ➕ Create Ticket
      </NavLink>
      <NavLink
        to="/employees"
        className={({ isActive }) =>
          "mb-4 hover:text-yellow-300 " + (isActive ? activeClass : "")
        }
      >
        👥 Employees
      </NavLink>
      <button
        onClick={handleLogout}
        className="mt-auto text-red-400 hover:text-red-600 text-left px-0"
      >
        🚪 Logout
      </button>
    </div>
  );
};

export default Sidebar;
