import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import Layout from "./layout";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/create";

function App() {
  function Redirect({ children }) {
    let user = JSON.parse(localStorage.getItem("user")) ?? false;
    return user ? children : <Navigate to="/" />;
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/layout"
          element={
            <Redirect>
              <Layout />
            </Redirect>
          }
        ></Route>
      </>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
