
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
import Contribution from "./pages/Contribution/Contribution";
import BookDetails from "./pages/MyShelf/BookDetails";
import Community from "./pages/Community/Community";
import ChatPage from "./pages/Chat/Chat";










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
    path: "/details/:id",
    element: <BookDetails/>, 
  },


  {
    path: "/contribution",
    element: <Contribution />, 
  },


  {
    path: "/settings",
    element: <Settings />, 
  },

  {
    path: "/community",
    element: <Community/>, 
  },


  {
    path: "/chat",
    element: <ChatPage/>, 
  },


]);


export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
