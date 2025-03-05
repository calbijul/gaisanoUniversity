import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./App.css";

const Register = () => {
  const darkMode = useSelector(state => state.darkMode);
  const [showToast, setShowToast] = useState({ message: "", type: "" });
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      firstname &&
      middlename &&
      lastname &&
      username &&
      password &&
      retypePassword
    ) {
      if (password !== retypePassword) {
        setShowToast({ message: "Passwords do not match!", type: "error" });
        setTimeout(() => setShowToast({ message: "", type: "" }), 3000);
        return;
      }

      const user = {
        firstname,
        middlename,
        lastname,
        email,
        username,
        password,
      };
      localStorage.setItem("user", JSON.stringify(user));

      setShowToast({ message: "Submitted successfully!", type: "success" });
      setTimeout(() => {
        setShowToast({ message: "", type: "" });
        navigate("/login");
      }, 3000);
    } else {
      setShowToast({
        message: "Please fill all the fields first!",
        type: "error",
      });
      setTimeout(() => setShowToast({ message: "", type: "" }), 3000);
    }

    setFirstname("");
    setMiddlename("");
    setLastname("");
    setEmail("");
    setUsername("");
    setPassword("");
    setRetypePassword("");
  };

  return (
    <div className="login-background bg-gray-900 flex items-center justify-center min-h-screen overflow-auto">
      <form className={`login-container w-full max-w-2xl p-8 px-20  bg-gray-800 shadow-2xl rounded-xl animate-loginCard-slideFadeIn ${darkMode ? 'dark:bg-darkSecondary dark:text-darkText' : 'bg-white text-black'}`}>
        <h2 className={`${darkMode ? 'text-white' : 'text-purple-900'} text-3xl font-bold text-center tracking-widest mb-8`}>
          SIGNUP
        </h2>

        {/* Name Row - 3 Columns */}
        <div className="grid grid-cols-3 gap-x-4 mb-6 ">
          <div>
            <label htmlFor="firstname" className={`${darkMode ? 'text-white' : 'text-black'} block text-sm font-medium mb-1`}>
              First Name
            </label>
            <input
              name="firstname"
              id="firstname"
              type="text"
              required
              placeholder="First Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="middlename" className={`${darkMode ? 'text-white' : 'text-black'} block text-sm font-medium mb-1`}>
              Middle Name
            </label>
            <input
              name="middlename"
              id="middlename"
              type="text"
              required
              placeholder="Middle Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
              value={middlename}
              onChange={(e) => setMiddlename(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="lastname" className={`${darkMode ? 'text-white' : 'text-black'} block text-sm font-medium mb-1`}>
              Last Name
            </label>
            <input
              name="lastname"
              id="lastname"
              type="text"
              required
              placeholder="Last Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>

        {/* Single Column Fields */}
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className={`${darkMode ? 'text-white' : 'text-black'} block text-sm font-medium mb-1`}>
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              required
              placeholder="Enter Email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="username" className={`${darkMode ? 'text-white' : 'text-black'} block text-sm font-medium mb-1`}>
              Username
            </label>
            <input
              name="username"
              id="username"
              type="text"
              required
              placeholder="Enter username"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className={`${darkMode ? 'text-white' : 'text-black'} block text-sm font-medium mb-1`}>
              Password
            </label>
            <input
              name="password"
              id="password"
              type="password"
              required
              placeholder="Enter password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="retype-password" className={`${darkMode ? 'text-white' : 'text-black'} block text-sm font-medium mb-1`}>
              Re-type Password
            </label>
            <input
              name="retype-password"
              id="retype-password"
              type="password"
              required
              placeholder="Re-type password"
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 ${
                password === "" || retypePassword === ""  
                  ? ""  
                  : password !== retypePassword
                  ? "bg-red-200"  
                  : "bg-green-200"  
              }`}
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
            />
          </div>
        </div>

        <button
          className="w-full py-2 mt-6 font-semibold bg-purple-900 text-white rounded-md hover:bg-purple-200 hover:text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-900 transition-colors"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>

        <p className={`${darkMode ? 'text-white' : 'text-black'} text-sm text-center mt-4`}>
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-purple-600 hover:text-purple-400">
            Login
          </Link>
        </p>

        {showToast.message && (
          <div
            className={`toast delay-300 ${showToast.type === "success" ? "toast-success" : "toast-error"}`}
          >
            <p>{showToast.message}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;