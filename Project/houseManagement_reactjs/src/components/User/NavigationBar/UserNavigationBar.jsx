import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavigationBar.css"
import Home from "../../../icon/home.png";
import Complaint from "../../../icon/compliant.png";
import LogoutIcon from "../../../icon/logoutIcon.png";

export default function UserNavigationBar({logout}) {
  const onLogout = () => {
    logout();
    localStorage.clear();
  }
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="navUser" variant="dark">
        <Navbar.Brand > <span> </span>House Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbarUser-link">
            <img
              alt="house"
              src={Home}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <Link to="myHouse">My House</Link>
            <img
              alt="compliant"
              src={Complaint}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <Link to="MyComplaint">Complaint</Link>
          </Nav>
          <Nav className="navUser-logout">
            <img
              alt="logout"
              src={LogoutIcon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <Link id="logout" to="/login" onClick={()=>onLogout()} >Logout</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
}