import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "../Auth.css";
import Service from "../../service/Service";
import SignUpImg from "../../../images/house.jpg"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      employeeId: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Id is Required"),
      employeeId: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Employee Id is Required"),
      password: Yup.string()
        .required("Password is Required")
        .min(8, "Password is too short !"),
      passwordConfirmation: Yup.string()
        .required("Confirm Password is Required")
        .oneOf([Yup.ref("password"), null], "Passwords not match !"),
    }),
    onSubmit: (values) => {
      console.log(values)
      Service.CheckIsUserPresent(values.email, values.employeeId).then((res) => {
        console.log(res.data);
        if (!res.data) {
          toast.warn("Please contact Admin..!");
          toast.warn("Your profile is not registered..!");
        } else {
          Service.checkEmployeeId(values.employeeId).then((res) => {
            if(res.data) {
              toast.warn("Your account already activated...!");
              toast.warn("Try to Login...!");
              navigate("/login")
            }else {
              Service.createAccount(values).then((res) => {
                toast.success("Account activated Sucessfully..!");
                navigate("/login")
              });
            }
          });
        }
      });
    },
  });
  return (
    <div className="signup">
      <div className="signup-heading">
        <div className="signup-grid">
          <div className="signup-left">
            <h1 className="welcome">House Management</h1>
            <div className="signupImgDiv">
              <img
                className="signup-img"
                src={SignUpImg}
                alt="signup img"
              />
            </div>
          </div>
          <div className="signup-right">
            <h1 className="signup-h">Set Password</h1>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="email">Email Id</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </div>
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
              <div>
                <label htmlFor="passwordConfirmation">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="passwordConfirmation"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirmation}
                />
                {formik.touched.passwordConfirmation &&
                formik.errors.passwordConfirmation ? (
                  <div className="error">
                    {formik.errors.passwordConfirmation}
                  </div>
                ) : null}
              </div>
              <div>
                <button id="submitButton" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
