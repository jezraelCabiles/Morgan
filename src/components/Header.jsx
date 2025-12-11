import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cpass, setCpass] = useState("");


  /* Clear Fields in Login sidebar  */

  const closeLogin = () => {
    setLogin(false);
    setUsername("");
    setPassword("");
  };

  const loginLink = (e) => {
    e.preventDefault();
    setLogin(false);
    setSignup(true);
    setUsername("");
    setPassword("");
  };

  /* Clear Fields in Sign Up sidebar  */

  const signupLink = (e) => {
    e.preventDefault();
    setLogin(true);
    setSignup(false);
    setUsername("");
    setPassword("");
    setCpass("");
    setEmail("");
  };

  const closeSignup = () => {
    setSignup(false);
    setUsername("");
    setPassword("");
    setCpass("");
    setEmail("");
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Inventory System</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li className="cursor-pointer hover:text-blue-600 transition">
            <button onClick={() => setLogin(true)}>Login</button>
          </li>
          <li className="cursor-pointer hover:text-blue-600 transition">
            <button onClick={() => setSignup(true)}>Sign up</button>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
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

      {/* LOGIN SIDEBAR */}
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

          <button
            type="submit"
            className="bg-green-500 p-2 rounded-lg font-semibold text-lg w-full mt-6 hover:bg-green-600"
          >
            Login
          </button>

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

      {/* SIGNUP SIDEBAR */}
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
