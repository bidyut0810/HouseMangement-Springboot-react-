import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewCompliant from "../Admin/Complaint/ViewComplaint";
import AddEmployee from "../Admin/Employee/AddEmployee";
import Employee from "../Admin/Employee/Employee";
import EditEmployee from "../Admin/Employee/EditEmployee";
import AddHouse from "../Admin/House/AddHouse";
import EditHouse from "../Admin/House/EditHouse";
import House from "../Admin/House/House";
import NavigationBar from "../Admin/Navigation Bar/NavigationBar";
import Login from "../Auth/Login/Login";
import Signup from "../Auth/Signup/Signup";
import ErrorPage from "../Error Page/ErrorPage";
import HomePage from "../Home Page/HomePage";
import UserNavigationBar from "../../components/User/NavigationBar/UserNavigationBar"
import ViewCompliantUser from "../User/Complaint/ViewComplaint"
import ViewMyHouse from "../User/MyHouse/ViewMyHouse";
import AddComplaint from "../User/Complaint/AddComplaint";
import HouseAllocation from "../Admin/House Allocation/HouseAllocation";

export default function Routing() {

  const [auth, setAuth] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    let users = localStorage.getItem("authStatus");
    users && JSON.parse(users) ? setAuth(true) : setAuth(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("authStatus", auth);
    let checkAdmin = localStorage.getItem("admin");
    setAdmin(checkAdmin);
    let checkUser = localStorage.getItem("user");
    setUser(checkUser);
  }, [auth]);

return (
  <BrowserRouter>
    <Routes>
    { (
      <>
      <Route path="/" element={<HomePage/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login authenticate={() => setAuth(true)} />} />
      </>
    )}
    { (
      <>
        <Route path="/admin" element={<NavigationBar logout={() => setAuth(false)} />} >
          <Route path="house" element={<House />}></Route>
          <Route path="houseAllocation" element={<HouseAllocation />}></Route>
          <Route path="addHouse" element={<AddHouse />}></Route>
          <Route path="editHouse/:houseId" element={<EditHouse />}></Route>
          <Route path="addEmployee" element={<AddEmployee />}></Route>
          <Route path="employee" element={<Employee />}></Route>
          <Route path="complaint" element={<ViewCompliant/>}></Route>
          <Route path="editEmployee/:employeeId" element={<EditEmployee/>}></Route>
        </Route>
      </>
    )}
    {  (
      <>
        <Route path="/user" element={<UserNavigationBar logout={() => setAuth(false)} />} >
          <Route path="myHouse" element={<ViewMyHouse/>}></Route>
          <Route path="MyComplaint" element={<ViewCompliantUser/>}></Route>
          <Route path="addComplaint" element={<AddComplaint/>}></Route>
        </Route>
      </>
    )}
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  </BrowserRouter>
  );
};    
