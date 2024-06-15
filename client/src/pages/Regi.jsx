import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function Regi() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneno: "",
  });
  const navigate = useNavigate();

  const { name, email, password, phoneno } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = { name, email, password, phoneno };

    try {
      const res = await axios.post(
        "http://localhost:8080/api/users/register",
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
      <div
        className="relative flex justify-center items-center min-h-screen bg-cover bg-center pt-10 bg-stone-600"
        // style={{
        //   backgroundImage:
        //     "url('https://www.shutterstock.com/image-vector/social-media-sketch-vector-seamless-600nw-1660950727.jpg')",
        // }}
      >
        <div className="relative z-10 w-full max-w-lg md:max-w-md p-10 space-y-4 bg-zinc-800 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-white text-center">
            Register Yourself
          </h2>
          <form onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                required
                placeholder="Enter your username"
                className="w-full px-4 py-2 mt-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500"
              />

              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-300 mt-4"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={onChange}
                required
                placeholder="Enter your email"
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
                htmlFor="phoneno"
                className="block text-lg font-medium text-gray-300 mt-4"
              >
                Phone No
              </label>
              <input
                type="text"
                name="phoneno"
                value={phoneno}
                onChange={onChange}
                required
                placeholder="Enter your phone no"
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
                  "Register"
                )}
              </button>
              <p className="text-sm text-center text-white">
                Already have an account..?{" "}
                <Link to="/login" classname="font-bold text-white">
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
