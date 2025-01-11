import React from "react";
import { Link, NavLink } from "react-router-dom";
import Loader from "../../components/Loader";

const Signup: React.FC = () => {
  return (
    <>
  <Loader />
    <div className="relative min-h-screen flex items-center justify-center">
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
          <img src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1736598974/Vector_2_1_dzsxmx.png" className="" alt="bg" />
      </div>

      {/* Signup Card */}
      <div className="bg-white rounded-xl shadow-lg w-96 p-6 z-10">
      <div className=" flex justify-center">
            <NavLink to="/" className="b block">
              <img src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1736312874/image_prev_ui_2_d4zqol.png"
               alt="logo" className='w-[100px] h-[90px] object-cover' />
            </NavLink>
          </div>

        <p className="text-center text-gray-600 mb-6">
          Sign up to start building your Digital Library
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
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
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <Link to ="/otp"
            type="submit"
            className="w-full bg-base text-white py-2  flex justify-center rounded-lg hover:bg-base/40 transition hover:text-base"
          >
            Sign Up
          </Link>
        </form>
        <div className="text-center mt-4 text-gray-600">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-base hover:underline">
              Login 
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Signup;
