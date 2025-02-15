import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
// import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/LoginPages';
import User from "./pages/User";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Login />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/Home",
    element: <App />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
