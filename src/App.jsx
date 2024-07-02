import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/MyHome";
import Aboute from "./pages/Aboute";
import MyHome from "./pages/MyHome";
import Root from "./pages/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/home",
          element: <MyHome />,
        },
        {
          path: "/about",
          element: <Aboute />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
