import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';

const Login = () => {
  const darkMode = useSelector(state => state.darkMode);
  const [showToast, setShowToast] = useState({ message: "", type: "" });
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();  

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setShowToast({ message: "Login Success!", type: "success" });
      localStorage.setItem("fullname", `${storedUser.firstname} ${storedUser.middlename} ${storedUser.lastname}`);
      setTimeout(() => {
        setShowToast({ message: "", type: "" });
        navigate('/homepage');  
      }, 3000);
    } else {
      setShowToast({ message: "Invalid username or password!", type: "error" });
      setTimeout(() => setShowToast({ message: "", type: "" }), 3000);
    }
  };

  return (
    <div className={`login-background min-h-screen flex flex-col items-center justify-center ${darkMode ? 'dark' : ''}`}>
      
      <div className="logo-container text-center mb-8 login-logo -mt-28">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Gaisano_Capital_Logo.svg/640px-Gaisano_Capital_Logo.svg.png" alt="Logo" className="mx-auto w-24 h-24 shadow-lg animate-slideFadeIn delay-100" />
        <h1 className={`text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-white'} mt-3 shadow-lg tracking-widest animate-slideFadeIn delay-200`}>GAISANO UNIVERSITY</h1>
      </div>

      <form className={`w-85 p-16 shadow-2xl rounded-xl animate-slideFadeIn delay-300 login-container ${darkMode ? 'dark:bg-darkSecondary dark:text-darkText' : 'bg-white text-black'}`}>
        <h2 className={`text-3xl font-semibold text-center tracking-wider ${darkMode ? 'text-white' : 'text-black'}`}>LOGIN</h2>

        <label htmlFor="username" className={`text-xl font-semibold text-center tracking-wider ${darkMode ? 'text-white' : 'text-black'}`}>Username</label>
        <input
          name="username"
          id="username"
          type="text"
          required
          placeholder="Enter email or phone"
          className="p-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 mb-4 w-full font-medium"
        />
        
        <label htmlFor="password" className={`text-xl font-semibold text-center tracking-wider ${darkMode ? 'text-white' : 'text-black'}`}>Password</label>
        <input
          name="password"
          id="password"
          type="password"
          required
          placeholder="Enter password"
          className="p-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 w-full font-medium"
        />

        <button
          className="w-full py-3 mt-4 font-semibold bg-purple-900 text-white rounded-lg hover:bg-purple-200 hover:text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-900 tracking-widest"
          onClick={handleSubmit}>SUBMIT</button>
        
        <p className={`text-xl font-semibold text-center tracking-wider ${darkMode ? 'text-white' : 'text-black'}`}>Doesn't have an account yet? 
          <Link to="/register" className="font-medium text-purple-600 hover:text-white"> Sign up</Link>
        </p>

        {showToast.message && (
          <div className={`toast delay-300 px-10 ${showToast.type === "success" ? "toast-success" : "toast-error"}`}>
            <p>{showToast.message}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
