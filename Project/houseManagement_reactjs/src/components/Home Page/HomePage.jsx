import React from "react";
import { useNavigate } from "react-router";
import "./Home.css";

export default function HomePage() {
  let navigate = useNavigate();
  return (
    <div className="Main">
      <div className="image">
        <h1 className="home-h1">House Management</h1>
        <img className="homeImg" src="https://cdn.shopify.com/s/files/1/0043/8471/8938/products/164160587923314115.jpg?v=1644029373" alt="Loading.." />
        <button
          className="HomeLogin"
          onClick={() => {
            navigate("login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
