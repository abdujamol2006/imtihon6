import React, { useRef } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const username = useRef();
  const password = useRef();
  const rememberMe = useRef();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let name = username.current.value;
    let code = password.current.value;
    const data = JSON.parse(localStorage.getItem("usersData")) ?? [];

    // **Filter users by login and password**
    const user = data.filter((userObj) => {
      return userObj.email === name && userObj.password === code; // Compare with the correct fields
    });

    if (user.length) {
      localStorage.setItem("user", JSON.stringify(true));
      navigate("/dashboard");
    } else {
      localStorage.setItem("user", JSON.stringify(false));

      // You may want to handle the invalid login scenario here (e.g., display an error message)
    }
  }
  return (
    <>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <div className="titles">
              <h2 className="title">Nice to see you!</h2>
              <p className="subtitle">
                Enter your email and password to sign in
              </p>
            </div>

            <form className="login" onSubmit={handleSubmit}>
              <div className="login__field">
                <i className="login__icon fas fa-user">Email</i>
                <input
                  required
                  ref={username}
                  type="text"
                  className="login__input"
                  placeholder="Your email adress"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock">Password</i>
                <input
                  required
                  ref={password}
                  type="password"
                  className="login__input"
                  placeholder="Your password"
                />
              </div>
              <div className="remember">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round" />
                </label>
                <h4 className="rem-text">Remember me</h4>
              </div>
              <button type="submit" className="button login__submit">
                <span className="button__text">SIGN IN</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div className="social-login">
              <h3 className="signup">
                Don't have an account?
                <Link className="sign-up" to="/">
                  Sign up
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <script
        src="https://kit.fontawesome.com/beb98df05a.js"
        crossOrigin="anonymous"
      ></script>{" "}
    </>
  );
}

export default Login;

/*import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./style.css";

function Login() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);
  const [dataType, setDataType] = useState("todos");

  useEffect(() => {
    if (loggedIn) {
      fetch(`https://jsonplaceholder.typicode.com/${dataType}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error));
    }
  }, [loggedIn, dataType]);

  const handleLogin = () => {
    // Implement login logic here
    setUser({ name: "John Doe" });
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement logout logic here
    setUser(null);
    setLoggedIn(false);
  };

  const handleDataTypeChange = (e) => {
    setDataType(e.target.value);
  };

  const memoizedData = useMemo(() => {
    return data.map((item) => <li key={item.id}>{item.title}</li>);
  }, [data]);

  const memoizedHandleDataTypeChange = useCallback(handleDataTypeChange, []);

  return (
    <div>
      <h1>JSONPlaceholder Data Viewer</h1>

      {loggedIn ? (
        <>
          <select value={dataType} onChange={memoizedHandleDataTypeChange}>
            <option value="todos">Todos</option>
            <option value="posts">Posts</option>
            <option value="users">Users</option>
          </select>

          <ul>{memoizedData}</ul>

          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleLogout}>Sign Up</button>
        </>
      )}
    </div>
  );
}

export default Login;*/
