
import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import Landing from "./pages/landingpage/Landing";
import BookPreview from "./pages/landingpage/Books/Preview";










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
    path: "/books-preview",
    element: <BookPreview />, // Replace 1 with the appropriate bookId value
  },







]);


export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
