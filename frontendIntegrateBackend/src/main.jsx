import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Components/Main.jsx";
import Peoples from "./Components/Peoples.jsx";
import People from "./Components/People.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/peoples",
        element: <Peoples />,
        loader: () => fetch("http://localhost:3000/data"),
      },
      {
        path: "/data/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/data/${params.id}`),
        element: <People />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
