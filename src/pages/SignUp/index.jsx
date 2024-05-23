import React, { useRef, useState } from "react";
import "./index.css";
import { Link, Navigate } from "react-router-dom";

function SignUp() {
  const [userInput, setUserInput] = useState({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });

  Navigate("/"); // Redirect to login page

  function handleSubmit(e) {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("usersData"))
      ? JSON.parse(localStorage.getItem("usersData"))
      : [];
    console.log(data);
    localStorage.setItem(
      "usersData",
      JSON.stringify([...data, { ...userInput }])
    );

    setUserInput({ name: "", avatar: "", email: "", password: "" });
  }
  return (
    <>
      <div className="container sign-container">
        <form className="form" onSubmit={handleSubmit}>
          <label className="sign-con" htmlFor="">
            <p>Name</p>
            <input
              required
              className="signinput"
              value={userInput.name}
              type="text"
              placeholder="First Name"
              onChange={(e) =>
                setUserInput((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </label>
          <label className="sign-con" htmlFor="">
            <p>Avatar</p>
            <input
              required
              className="signinput"
              value={userInput.avatar}
              type="text"
              placeholder="Phone Number"
              onChange={(e) =>
                setUserInput((prev) => ({ ...prev, avatar: e.target.value }))
              }
            />
          </label>
          <label className="sign-con" htmlFor="">
            <p>Email</p>
            <input
              required
              className="signinput"
              value={userInput.email}
              type="text"
              placeholder="UserName"
              onChange={(e) =>
                setUserInput((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </label>
          <label className="sign-con" htmlFor="">
            <p>Password</p>
            <input
              required
              className="signinput"
              value={userInput.password}
              type="text"
              placeholder="Password"
              onChange={(e) =>
                setUserInput((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </label>
          <div className="remember">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round" />
            </label>
            <h4 className="rem-text">Remember me</h4>
          </div>
          <button className="submit" type="submit">
            Sign Up
          </button>
          <Link className="loginlink" to="/login">
            Already have an account? <span className="oq">Sign in</span>
          </Link>
        </form>
      </div>
    </>
  );
}

export default SignUp;
