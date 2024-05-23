/*import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./index.css";

function Dashboard() {
  return (
    <>
      <header>
        <div className="container create-container">
          <div className="private">
            <button className="userinfo">
              <img src="./src/images/user.png" alt="" />
              User name
            </button>
            <div className="div1">
              <NavLink className="priv-btn" to={"/dashboard"}>
                <span className="around">
                  <img src="./src/images/home.png" alt="s" />
                </span>
                Dashboard
              </NavLink>
              <NavLink className="priv-btn" to={"/layout"}>
                <span className="around">
                  <img src="./src/images/chart.png" alt="" />
                </span>
                Products
              </NavLink>
            </div>
            <div className="div2">
              <NavLink to={"/"} className="priv-btn">
                <span className="around">
                  <img src="./src/images/document.png" alt="" />
                </span>
                Sign Up
              </NavLink>
              <NavLink to={"/login"} className="priv-btn">
                <span className="around">
                  <img src="./src/images/raketa.png" alt="" />
                </span>
                Log out
              </NavLink>
            </div>
            <h3>ACCOUNT PAGES</h3>
          </div>

          <div className="create">
            <div className="productinfo">
              <div className="hed">
                <h3>Pages </h3>
                <h3 className="oq"> / Dashboard</h3>
              </div>
              <div className="productinp">
                <h2 className="protitle">Create Products</h2>
                <form className="listinp">
                  <label className="sign-con" htmlFor="">
                    <p>Name</p>
                    <input
                      className="createinput"
                      type="text"
                      placeholder="First Name"
                    />
                  </label>
                  <label className="sign-con" htmlFor="">
                    <p>Avatar</p>
                    <input
                      className="createinput"
                      type="text"
                      placeholder="Phone Number"
                    />
                  </label>
                  <label className="sign-con" htmlFor="">
                    <p>Email</p>
                    <input
                      className="createinput"
                      type="text"
                      placeholder="UserName"
                    />
                  </label>
                  <label className="sign-con" htmlFor="">
                    <p>Password</p>
                    <input
                      className="createinput"
                      type="text"
                      placeholder="Password"
                    />
                  </label>

                  <Link to={"/layout"}>
                    <button className="createsubmit" type="submit">
                      CREATE
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Dashboard;*/ import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "./index.css";

function Dashboard() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductAvatar] = useState("");
  const [productPrice, setProductEmail] = useState("");
  const [productImageLink, setProductPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the product data to local storage
    const productData = {
      name: productName,
      category: productCategory,
      price: productPrice,
      imageLink: productImageLink,
    };

    const existingProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );
    localStorage.setItem(
      "products",
      JSON.stringify([...existingProducts, productData])
    );

    // Navigate to the product list page
    navigate("/layout");
  };

  return (
    <>
      <header>
        <div className="container create-container">
          {/* ... (Your existing header content) ... */}
          <div className="container create-container">
            <div className="private">
              <button className="userinfo">
                <img src="./src/images/user.png" alt="" />
                User name
              </button>
              <div className="div1">
                <NavLink className="priv-btn" to={"/dashboard"}>
                  <span className="around">
                    <img src="./src/images/home.png" alt="s" />
                  </span>
                  Dashboard
                </NavLink>
                <NavLink className="priv-btn" to={"/layout"}>
                  <span className="around">
                    <img src="./src/images/chart.png" alt="" />
                  </span>
                  Products
                </NavLink>
              </div>
              <div className="div2">
                <NavLink to={"/"} className="priv-btn">
                  <span className="around">
                    <img src="./src/images/document.png" alt="" />
                  </span>
                  Sign Up
                </NavLink>
                <NavLink to={"/login"} className="priv-btn">
                  <span className="around">
                    <img src="./src/images/raketa.png" alt="" />
                  </span>
                  Log out
                </NavLink>
              </div>
              <h3 className="white">ACCOUNT PAGES</h3>
            </div>
          </div>
          <div className="create">
            <div className="productinfo">
              <div className="hed">
                <h3>Pages </h3>
                <h3 className="oq"> / Dashboard</h3>
              </div>
              <div className="productinp">
                <h2 className="protitle">Create Products</h2>
                <form className="listinp" onSubmit={handleSubmit}>
                  <label className="sign-con" htmlFor="productName">
                    <p>Name</p>
                    <input
                      className="createinput"
                      type="text"
                      id="productName"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      placeholder="Product Name"
                    />
                  </label>
                  <label className="sign-con" htmlFor="productAvatar">
                    <p>Avatar</p>
                    <input
                      className="createinput"
                      type="text"
                      id="productAvatar"
                      value={productCategory}
                      onChange={(e) => setProductAvatar(e.target.value)}
                      placeholder="Avatar URL"
                    />
                  </label>
                  <label className="sign-con" htmlFor="productEmail">
                    <p>Email</p>
                    <input
                      className="createinput"
                      type="text"
                      id="productEmail"
                      value={productPrice}
                      onChange={(e) => setProductEmail(e.target.value)}
                      placeholder="Product Email"
                    />
                  </label>
                  <label className="sign-con" htmlFor="productPassword">
                    <p>Password</p>
                    <input
                      className="createinput"
                      type="text"
                      id="productPassword"
                      value={productImageLink}
                      onChange={(e) => setProductPassword(e.target.value)}
                      placeholder="Product Password"
                    />
                  </label>
                  {/* ... (Your form fields) ... */}
                  <button className="createsubmit" type="submit">
                    CREATE
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* ... (Your existing header content) ... */}
        </div>
      </header>
    </>
  );
}

export default Dashboard;
