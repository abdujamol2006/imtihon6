import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./index.css";

/*function Layout() {
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
            <h3 className="white">ACCOUNT PAGES</h3>
          </div>

          <div className="deh">
            <h3>Pages </h3>
            <h3 className="oq"> / Products</h3>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;*/

// Make sure you have a CSS file for styling

function Layout() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(storedProducts);
  }, []);

  return (
    <div>
      /
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

        <div className="deh">
          <h3>Pages </h3>
          <h3 className="oq"> / Products</h3>
        </div>
      </div>
      <h2>Product List</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            {" "}
            {/* Create a card div */}
            <img
              src={product.avatar}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>Category: {product.category || "N/A"}</p>
            <p>Price: ${product.price || "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Layout;
