import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Service from "../../../components/service/Service";

export default function AddComplaint() {
  const [employee, setEmployee] = useState([]);
  let empId = localStorage.getItem('EmployeeId');

  const loadDataOnlyOnce = () => {
    Service.viewByEmployeeId(empId).then((res) => {
      setEmployee(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    loadDataOnlyOnce();
  }, []);
  
  let navigation = useNavigate();
  const formik = useFormik({
    initialValues: {
    employeeId: "",
    houseId: "",
    complaintType: "",
    complaintDescrption: "",
    status: "Complaint"
    },
    validationSchema: Yup.object({
      complaintDescrption: Yup.string()
        .min(3, "At least 3 Characters required")
        .max(20, "Maximum Characters allowed is 20")
        .required("Required *"),
      complaintType: Yup.string()
        .required("Required *"),
    }),
    onSubmit: (values) => {
      formik.values.employeeId = employee.employeeId;
      formik.values.houseId = employee.houseId;
      console.log(values)
    Service.addComplaint(values).then((res) => {
        toast.success("Your Complaint Added Successfully..!");
        toast.success("Employee get assigned as soon as..!");
        formik.resetForm();
        navigation(-1);
        console.log(res.data);
    });
    },
  });

  return (
    <div>
      <h2 className="headingAddComplaint">Add Complaint</h2>
    <form onSubmit={formik.handleSubmit}>
        <div className="MainDiv">
        <div>
            <label htmlFor="houseId">House Id </label>
            <input
            id="houseId"
            type="text"
            name="houseId"
            value={employee.houseId || ""}
            />
        </div>

        <div>
            <label htmlFor="employeeId">Employee Id </label>
            <input
            id="employeeId"
            type="text"
            name="employeeId"
            value={employee.employeeId|| ""}
            />
        </div>

        <div>
            <label htmlFor="complaintType">Complaint Type</label>
            <select
            id="complaintType"
            name="complaintType"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.complaintType || ""}
            > <option value="" label="Select Complaint" />
            <option value="Water Supply" label="Water Supply" />
            <option value="Eletricity" label="Eletricity" />
            <option value="Room Cleaning" label="Room Cleaning" />
            <option value="Others" label="Others" />
            </select>
            {formik.touched.complaintType && formik.errors.complaintType ? (
            <p id="error">{formik.errors.complaintType}</p>
            ) : null}
        </div>

        <div>
            <label htmlFor="complaintDescrption">Descrption</label>
            <input
            id="descrption"
            type="text"
            name="complaintDescrption"
            placeholder="Enter Descrption"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.complaintDescrption || ""}
            />
            {formik.touched.complaintDescrption && formik.errors.complaintDescrption ? (
            <p id="error">{formik.errors.complaintDescrption}</p>
            ) : null}
        </div>

        <div>
            
        </div>
        <button id="addComplaint" type="submit">
            Add Complaint
        </button>
        </div>
    </form>
    </div>
  );
}
