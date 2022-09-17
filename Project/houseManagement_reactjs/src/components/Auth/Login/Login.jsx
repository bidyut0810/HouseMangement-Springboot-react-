import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "../Auth.css";
import Service from "../../service/Service";
import { toast } from "react-toastify";
import LoginImg from "../../../images/house.jpg"

export default function Login( {authenticate} ) {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      employeeId: "",
      password: "",
    },
    validationSchema: Yup.object({
      employeeId: Yup.string()
        .required("Employee Id is Required"),
      password: Yup.string()
        .required("Password is Required")
        .min(8, "Password is too short !")
        .max(12, "Password should not max 12 character"),
    }),
    onSubmit: (values) => {
      if(values.employeeId === "admin" && values.password === "admin@123") {
        

        Service.authenticate(values).then((res)=>{
          localStorage.setItem("token",res.data);
        console.log(res.data)


        })
       
        localStorage.setItem("admin", true);
        navigate("/admin/house")
      }else {
        Service.authenticate(values).then((res)=>{
          localStorage.setItem("token",res.data);
        
          Service.login(values.employeeId,values.password).then((res)=>{
            localStorage.setItem("user",values.employeeId);
            if(res.data) {
              toast.success("Welcome Back...!")
              navigate("/user/myHouse")
              localStorage.setItem("EmployeeId", values.employeeId);
            }else {
              toast.warn("Invalid Credentials");
            }
          }).catch(toast.warn("sorry"))

        })


        }
      }
  });
  return (
    <div className="login">
      <div className="login-heading">
        <div className="login-grid">
          <div className="login-left">
            <h1 className="welcome-login">House Management</h1>
            <img
              className="login-img"
              src={LoginImg}
              alt="signup img"
            />
          </div>
          <div className="login-right">
            <h1 className="login-h">Login</h1>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="employeeId">Employee Id</label>
                <input
                  id="employeeId"
                  name="employeeId"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.employeeId}
                />
                {formik.touched.employeeId && formik.errors.employeeId ? (
                  <div className="error">{formik.errors.employeeId}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="signup-text">
                Are you new user? <Link to="/signup">Signup</Link>{" "}
              </div>
              <button id="loginButton" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
