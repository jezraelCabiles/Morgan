// src/components/Header.jsx
// Navbar component with responsive design and login/signup sidebars
// Uses React, lucide-react for icons, and react-router-dom for navigation
// Tailwind CSS classes are used for styling
// State management is handled with React's useState hook
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // State variables for menu, login, signup, and form fields
  const [menuOpen, setMenuOpen] = useState(false);
  // Login sidebar state
  const [login, setLogin] = useState(false);
  // Signup sidebar state
  const [signup, setSignup] = useState(false);
  // Form field states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Email state for signup
  const [email, setEmail] = useState("");
  // Confirm password state for signup
  const [cpass, setCpass] = useState("");

  // Clear Fields in Login sidebar

  // Close login sidebar and reset fields
  const closeLogin = () => {
    setLogin(false);
    setUsername("");
    setPassword("");
  };

  // Switch to Signup sidebar from Login sidebar and reset fields
  // Clear Fields in Signup sidebar

  const loginLink = (e) => {
    e.preventDefault();
    setLogin(false);
    setSignup(true);
    setUsername("");
    setPassword("");
  };

  // Switch to Login sidebar from Signup sidebar and reset fields
  // Clear Fields in Login sidebar

  const signupLink = (e) => {
    e.preventDefault();
    setLogin(true);
    setSignup(false);
    setUsername("");
    setPassword("");
    setCpass("");
    setEmail("");
  };
  // Close signup sidebar and reset fields
  // Clear Fields in Signup sidebar
  const closeSignup = () => {
    setSignup(false);
    setUsername("");
    setPassword("");
    setCpass("");
    setEmail("");
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-full mx-auto py-4 flex items-center justify-between px-6">
        <h1 className="text-2xl font-semibold ml-10">Inventory System</h1>

        {/* Desktop Menu 
        // Hidden on mobile devices
        // Visible on medium and larger screens
        // Menu items for Login and Sign up
        // Styled with hover effects and transitions
        // Uses buttons to trigger sidebars
    
        
        */}
        <ul className="hidden md:flex gap-8 text-lg mr-10">
          <li className="cursor-pointer hover:text-blue-600 transition">
            <button onClick={() => setLogin(true)}>Login</button>
          </li>
          <li className="cursor-pointer hover:text-blue-600 transition">
            <button onClick={() => setSignup(true)}>Sign up</button>
          </li>
        </ul>

        {/* Mobile Toggle 
        // Visible on mobile devices
        // Hidden on medium and larger screens
        // Toggles the mobile menu visibility
        // Uses Menu and X icons from lucide-react
        */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu 
      // Visible only when menuOpen is true
      // Hidden on medium and larger screens
      // Menu items for Login and Sign up
      // Styled with hover effects and transitions
        */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <ul className="flex flex-col px-6 pb-4 pt-4 gap-4 text-lg">
            <li className="cursor-pointer hover:text-blue-600 transition">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setLogin(true);
                }}
              >
                Login
              </button>
            </li>

            <li className="cursor-pointer hover:text-blue-600 transition">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setSignup(true);
                }}
              >
                Sign up
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* LOGIN SIDEBAR
      // Slides in from the right when login state is true
      // Contains a login form with username and password fields
      // Includes a link to switch to the signup sidebar
      */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white p-6 transition-transform duration-300 md:w-96 ${
          login ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="mb-4" onClick={closeLogin}>
          <X size={26} />
        </button>
        <h2 className="text-2xl font-semibold mb-6 text-center">Login here!</h2>

        <form className="flex flex-col text-left items-start gap-5 mt-10">
          <label className="font-semibold w-full">
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-500 md:text-sm/6"
              required
            />
          </label>

          <label className="font-semibold w-full">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-500 md:text-sm/6"
              required
            />
          </label>
          <Link to="/DashBoard" className="w-full">
            <button
              type="submit"
              className="bg-green-500 p-2 rounded-lg font-semibold text-lg w-full mt-6 hover:bg-green-600"
            >
              Login
            </button>
          </Link>

          <div className="mt-3 text-center text-md w-full">
            <span>
              Don't have an account?
              <button
                type="button"
                className="text-blue-600 pl-2 underline"
                onClick={loginLink}
              >
                Sign up
              </button>
            </span>
          </div>
        </form>
      </div>

      {/* SIGNUP SIDEBAR 
      // Slides in from the right when signup state is true
      // Contains a signup form with username, email, password, and confirm password fields
      // Includes a link to switch to the login sidebar
      */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white p-6 transition-transform duration-300 md:w-96 ${
          signup ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="mb-4" onClick={closeSignup}>
          <X size={26} />
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center">
          Sign Up here!
        </h2>

        <form className="flex flex-col text-left items-start gap-5 mt-10">
          <label className="font-semibold w-full">
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-500 md:text-sm/6"
              required
            />
          </label>

          <label className="font-semibold w-full">
            Email Address:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter a valid Email"
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-500 md:text-sm/6"
              required
            />
          </label>

          <label className="font-semibold w-full">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-500 md:text-sm/6"
              required
            />
          </label>

          <label className="font-semibold w-full">
            Confirm Password:
            <input
              type="password"
              value={cpass}
              onChange={(e) => setCpass(e.target.value)}
              placeholder="Confirm Password"
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-500 md:text-sm/6"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-green-500 p-2 rounded-lg font-semibold text-lg w-full mt-6 hover:bg-green-600"
          >
            Sign up
          </button>

          <div className="mt-3 text-center text-md w-full">
            <span>
              Already have an account?
              <button
                type="button"
                className="text-blue-600 pl-2 underline"
                onClick={signupLink}
              >
                Login
              </button>
            </span>
          </div>
        </form>
      </div>
    </nav>
  );
}
