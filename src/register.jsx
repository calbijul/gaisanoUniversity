import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";



const Register = () => {
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
    <div className="login-background  bg-gray-900 flex items-center justify-center min-h-screen overflow-auto">
      <form className="login-container  w-full max-w-2xl p-16 bg-gray-800 shadow-2xl rounded-xl animate-loginCard-slideFadeIn">
        <h2 className="text-3xl font-bold text-center tracking-widest text-white">
          SIGNUP
        </h2>

        <label
          htmlFor="firstname"
          className="text-xl font-semibold text-center tracking-wider text-white"
        >
          First Name
        </label>
        <input
          name="firstname"
          id="firstname"
          type="text"
          required
          placeholder="Enter First Name"
          className="p-6 py-3 border mb-5 border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600 w-full font-medium"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />

        <label
          htmlFor="middlename"
          className="text-xl font-semibold text-center tracking-wider text-white"
        >
          Middle Name
        </label>
        <input
          name="middlename"
          id="middlename"
          type="text"
          required
          placeholder="Enter Middle Name"
          className="p-6 py-3 border mb-5 border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600 w-full font-medium"
          value={middlename}
          onChange={(e) => setMiddlename(e.target.value)}
        />

        <label
          htmlFor="lastname"
          className="text-xl font-semibold text-center tracking-wider text-white"
        >
          Last Name
        </label>
        <input
          name="lastname"
          id="lastname"
          type="text"
          required
          placeholder="Enter Last Name"
          className="p-6 py-3 border mb-5 border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600 w-full font-medium"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />

        <label
          htmlFor="email"
          className="text-xl font-semibold text-center tracking-wider text-white"
        >
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          required
          placeholder="Enter Email"
          className="p-6 py-3 border mb-5 border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600 w-full font-medium"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label
          htmlFor="username"
          className="text-xl font-semibold text-center tracking-wider text-white"
        >
          Username
        </label>
        <input
          name="username"
          id="username"
          type="text"
          required
          placeholder="Enter username"
          className="p-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600 mb-4 w-full font-medium"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label
          htmlFor="password"
          className="text-xl font-semibold text-center tracking-wider text-white"
        >
          Password
        </label>
        <input
          name="password"
          id="password"
          type="password"
          required
          placeholder="Enter password"
          className="p-6 py-3 border mb-5 border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600 w-full font-medium"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label
          htmlFor="retype-password"
          className="text-xl font-semibold text-center tracking-wider text-white"
        >
          Re-type Password
        </label>
        <input
          name="retype-password"
          id="retype-password"
          type="password"
          required
          placeholder="Re-type password"
          className={`p-6 py-3 border mb-5 border-gray-300 rounded-lg focus:outline-none focus:ring-1 ${
            password !== retypePassword
              ? "focus:ring-red-600"
              : "focus:ring-green-600"
          } w-full font-medium`}
          value={retypePassword}
          onChange={(e) => setRetypePassword(e.target.value)}
        />

        <button
          className="w-full py-3 mt-4 font-semibold bg-purple-900 text-white rounded-lg hover:bg-purple-200 hover:text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-900 tracking-widest"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>

        <p className="text-white">
          Already have an account?
          <Link to="/login" className="font-medium text-purple-600 hover:text-white">
            {" "}
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
