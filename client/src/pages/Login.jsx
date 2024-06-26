import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import io from "socket.io-client";
import Navbar from "../components/Navbar";

function Login() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = { username, password };

    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("user", JSON.stringify(res.data.user));

          // Establish WebSocket connection
          const socket = io("http://localhost:8080", {
            query: { token: res.data.token },
          });

      // Example of listening to a message
      socket.on("message", (msg) => {
        console.log("Received message:", msg);
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
      setMessage("Login successful... Redirecting to dashboard");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setMessage("login failed. Pleased try again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
      <div
        className="relative flex justify-center items-center min-h-screen bg-cover bg-center pt-10"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/3d/f4/37/3df437922930cf2e2cbbe9f5b22132d3.jpg')",
        }}
      >
        <div className="relative z-10 w-full max-w-lg md:max-w-md p-10 space-y-4 bg-zinc-800 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-white text-center">Login</h2>
          <form action="" type="submit" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-lg font-medium text-gray-300"
              >
                username
              </label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={onChange}
                required
                placeholder="Enter your username"
                className="w-full px-4 py-2 mt-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500"
              />
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-300 mt-4"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="submit"
                className="w-full mt-8 mb-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                disabled={isLoading}
              >
                {isLoading ? (
                  <ClipLoader size={20} color={"#fff"} />
                ) : (
                  "Login"
                )}
              </button>
              <p className='text-sm text-center text-white'>Don't have an account..? <Link to='/register' classname="font-bold text-white">Click here</Link></p>
            </div>
          </form>
          {message && (
            <p className="mt-4 text-center text-sm text-white">{message}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
