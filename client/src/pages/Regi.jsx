import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Navbar from "../components/Navbar";

function Regi() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
    gender: "",
    profilepic: ""
  });
  const navigate = useNavigate();

  const { fullname, username, password, gender, profilepic } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = { fullname, username, password, gender, profilepic };

    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      console.log(res.data);
      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("user", JSON.stringify(res.data.user));
      setMessage("Registration successful... Redirecting to login page.");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setMessage("Registration failed. Please try again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="relative flex justify-center items-center min-h-screen bg-cover bg-center pt-10"
        style={{
          backgroundImage: "url('https://i.pinimg.com/originals/3d/f4/37/3df437922930cf2e2cbbe9f5b22132d3.jpg')",
        }}
      >
        <div className="relative z-10 w-full max-w-lg md:max-w-md p-10 space-y-4 bg-zinc-800 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-white text-center">
            Register Yourself
          </h2>
          <form onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="fullname"
                className="block text-lg font-medium text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                value={fullname}
                onChange={onChange}
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-2 mt-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500"
              />

              <label
                htmlFor="username"
                className="block text-lg font-medium text-gray-300 mt-4"
              >
                Username
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

              <label
                htmlFor="gender"
                className="block text-lg font-medium text-gray-300 mt-4"
              >
                Gender
              </label>
              <select
                name="gender"
                value={gender}
                onChange={onChange}
                className="w-full px-4 py-2 mt-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              <button
                type="submit"
                className="w-full mt-8 mb-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                disabled={isLoading}
              >
                {isLoading ? (
                  <ClipLoader size={20} color={"#fff"} />
                ) : (
                  "Register"
                )}
              </button>
              <p className="text-sm text-center text-white">
                Already have an account..?{" "}
                <Link to="/login" className="font-bold text-white">
                  Click here
                </Link>
              </p>
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

export default Regi;
