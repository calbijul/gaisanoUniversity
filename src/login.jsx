import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import './App.css';

const Login = () => {
  const [showToast, setShowToast] = useState({ message: "", type: "" });
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();  

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setShowToast({ message: "Login successful!", type: "success" });
      localStorage.setItem("fullname", `${storedUser.firstname} ${storedUser.middlename} ${storedUser.lastname}`);
      setTimeout(() => {
        setShowToast({ message: "", type: "" });
        navigate('/homepage');  
      }, 3000);
    } else {
      setShowToast({ message: "Invalid username or password", type: "error" });
      setTimeout(() => setShowToast({ message: "", type: "" }), 3000);
    }
  };

  return (
    <div className="login-background min-h-screen flex items-center justify-center">
      <form className="w-85 p-16 bg-gray-800 shadow-2xl rounded-xl animate-loginCard-slideFadeIn login-container">
        <h2 className="text-3xl font-bold mb-4 text-center tracking-widest text-white">LOGIN</h2>

        <label htmlFor="username" className="text-xl font-semibold text-center tracking-wider text-white">Username</label>
        <input
          name="username"
          id="username"
          type="text"
          required
          placeholder="Enter email or phone"
          className="p-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600 mb-4 w-full font-medium"
        />
        <label htmlFor="password" className="text-xl font-semibold text-center tracking-wider text-white">Password</label>
        <input
          name="password"
          id="password"
          type="password"
          required
          placeholder="Enter password"
          className="p-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600 w-full font-medium"
        />

        <button
          className="w-full py-3 mt-4 bg-green-700 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400 "
          onClick={handleSubmit}>SUBMIT</button>
        <p className="text-white">Doesn't have an account yet?<Link to="/register" className="font-medium text-green-600"> Sign up</Link></p>

        {showToast.message && (
          <div
            className={`absolute top-10 left-[50%] -translate-x-[50%] mb-10 px-6 py-3 rounded-lg shadow-lg transition-all duration-500 
              ${showToast.type === "success" ? "bg-green-400" : "bg-red-400"} text-white`}
          >
            <p>{showToast.message}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
