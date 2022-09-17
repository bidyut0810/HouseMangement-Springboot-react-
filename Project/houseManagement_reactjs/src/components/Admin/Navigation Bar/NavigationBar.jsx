import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavigationBar.css"
import Home from "../../../icon/home.png";
import Complaint from "../../../icon/compliant.png";
import Employee from "../../../icon/employee.png";
import LogoutIcon from "../../../icon/logoutIcon.png";

export default function NavigationBar({logout}) {
  const onLogout = () => {
    logout();
    localStorage.clear();
  }
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="nav" variant="dark">
        <Navbar.Brand > <span> </span>House Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-link">
            <img
              alt="house"
              src={Home}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <Link to="house">House</Link>
            <img
              alt="house"
              src={Home}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <Link to="houseAllocation">House Allocation</Link>
            <img
              alt="compliant"
              src={Complaint}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <Link to="complaint">Complaint</Link>
            <img
              alt="employee"
              src={Employee}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <Link to="employee">Employee</Link>
          </Nav>
          <Nav className="nav-logout">
            <img
              alt="logout"
              src={LogoutIcon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <Link id="logout" to="/login" onClick={()=>onLogout()}>Logout</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
}