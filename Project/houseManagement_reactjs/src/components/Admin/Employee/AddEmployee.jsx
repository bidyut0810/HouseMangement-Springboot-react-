import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import Service from "../../../components/service/Service";
import { toast } from "react-toastify";
import './Employee.css'
import "react-toastify/dist/ReactToastify.css";

export default function AddEmployee() {
  let navigation = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      emailId: "",
      age: "",
      workingExperience: "",
      address: "",
      designation: "",
      point: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Please enter employee Name*"),
      emailId: Yup.string()
        .email("Invalid e-mail Id")
        .required("Please enter employee e-mail Id*"),
      age: Yup.string()
        .required(" Please enter employee Age*"),
      workingExperience: Yup.string()
        .required("Please enter employee Working Experience*"),
      address: Yup.string()
        .required("Please enter employee Address*")
        .min(3, "At least 3 characters required")
        .max(20, "Maximum Characters allowed is 20"),
      designation: Yup.string()
        .required("Please enter employee Designation*")
        .min(5, "Too short Designation")
        .max(200, "Maximum Characters allowed is 200"),
    }),
    onSubmit: (values) => {
      var calcPoint = values.age*2 + values.workingExperience * 10;
      console.log(calcPoint) 
      formik.values.point = calcPoint
      console.log(values)
      Service.addEmployee(values).then((res) => {
        toast.success("New Employee Added Successfully");
        formik.resetForm();
        navigation(-1);
        console.log(res.data);
      });
    },
  });
  return (
    <div>
      <h2 className="headingAddEmployee">Add New Employee</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="MainDiv">
          <div>
            <label htmlFor="name">Employee Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter the Employee Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.name || ""}
            />
            {formik.touched.name && formik.errors.name ? (
              <p id="error">{formik.errors.name}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="emailId">Email Id </label>
            <input
              id="emailId"
              type="email"
              name="emailId"
              placeholder="Enter the Employee E-mail Id"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.emailId || ""}
            />
            {formik.touched.emailId && formik.errors.emailId ? (
              <p id="error">{formik.errors.emailId}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="age">Age </label>
            <input
              id="age"
              type="number"
              name="age"
              placeholder="Enter the Employee Age"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.age || ""}
            />
            {formik.touched.age && formik.errors.age ? (
              <p id="error">{formik.errors.age}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="workingExperience">Working Experience</label>
            <input
              id="workingExperience"
              type="number"
              pattern="/d"
              name="workingExperience"
              placeholder="Enter the Employee Working Experience"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.workingExperience || ""}
            />
            {formik.touched.workingExperience && formik.errors.workingExperience ? (
              <p id="error">{formik.errors.workingExperience}</p>
            ) : null}
          </div>

          

          <div>
            <label htmlFor="designation">Designation </label>
            <input
              id="designation"
              type="text"
              name="designation"
              placeholder="Enter the Employee Designation"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.designation || ""}
            />
            {formik.touched.designation &&
            formik.errors.designation ? (
              <p id="error">{formik.errors.designation}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="address">Address </label>
            <input
              id="address"
              type="text"
              name="address"
              placeholder="Enter the Employee Address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.address || ""}
            />
            {formik.touched.address &&
            formik.errors.address ? (
              <p id="error">{formik.errors.address}</p>
            ) : null}
          </div>
          <div>

          </div>
          <button id="addEmployee" type="submit">
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
}

