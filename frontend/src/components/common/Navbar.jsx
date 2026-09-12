import React, { useContext } from 'react';
import './Navebar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-slate-800 text-white shadow-md">
      <Link to="/" className="text-xl font-bold text-blue-400">FitPlanner</Link>
      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>
            <span className="text-slate-400">Hello, {user.name}</span>
            <button onClick={handleLogout} className="bg-red-500/20 text-red-400 px-3 py-1 rounded hover:bg-red-500/30">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-400">Login</Link>
            <Link to="/register" className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}