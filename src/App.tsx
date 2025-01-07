
import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import Landing from "./pages/landingpage/Landing";










const router = createBrowserRouter([


  {
    path: "/",
    element: <Landing />,
  },

 
  {
    path: "/login",
    element: <Login />,
  },





]);


export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
