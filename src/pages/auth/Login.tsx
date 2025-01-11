import React from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../components/Loader";

const Login: React.FC = () => {
  return (
    <>
   <Loader />
    <div className="relative min-h-screen flex items-center justify-center b">
      {/* Background SVG Wave */}
      <div className="absolute inset-0">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,224C672,235,768,245,864,224C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg> */}
        <img src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1736598974/Vector_2_1_dzsxmx.png" alt="" />
      </div>

      {/* Login Card */}
      <div className="bg-white rounded-xl shadow-lg w-96 p-6 z-10">
      <div className=" flex justify-center">
            <NavLink to="/" className="b block">
              <img src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1736312874/image_prev_ui_2_d4zqol.png"
               alt="logo" className='w-[100px] h-[90px] object-cover' />
            </NavLink>
          </div>
        <p className="text-center text-gray-600 mb-6">
          Welcome Back! Sign in to continue to your Digital Library
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="username@collegename.ac.in"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <span className="absolute right-3 top-2.5 text-gray-500 cursor-pointer">
                👁
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-gray-700">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="/forgot" className="text-base hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-base text-white py-2 rounded-lg hover:bg-base/30 transition"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4 text-gray-600">
          <p>
            New User?{" "}
            <a href="/signup" className="text-base hover:underline">
          Signup
            </a>
          </p>
          <p>
           
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
