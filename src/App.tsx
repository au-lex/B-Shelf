
import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import Landing from "./pages/landingpage/Landing";
import BookPreview from "./pages/landingpage/Books/Preview";
import Signup from "./pages/auth/Signup";
import OtpVerify from "./pages/auth/Otp";
import ForgotPassword from "./pages/auth/ForgottenPwd";
import UserDashboard from "./pages/user/UserDashboard";
import MyShelf from "./pages/MyShelf/MyShelf";
import Settings from "./pages/Settings/Settings";










const router = createBrowserRouter([


  {
    path: "/",
    element: <Landing />,
  },

 
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/otp",
    element: <OtpVerify />,
  },


  {
    path: "/forgot",
    element: <ForgotPassword />,
  },



  {
    path: "/books-preview",
    element: <BookPreview />, 
  },




  {
    path: "/user",
    element: <UserDashboard />, 
  },

  {
    path: "/my-shelf",
    element: <MyShelf />, 
  },


  {
    path: "/settings",
    element: <Settings />, 
  },

]);


export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
