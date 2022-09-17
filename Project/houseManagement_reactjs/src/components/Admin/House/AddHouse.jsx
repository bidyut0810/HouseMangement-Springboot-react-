import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Service from "../../../components/service/Service";

export default function AddHouse() {
let navigation = useNavigate();

const formik = useFormik({
    initialValues: {
    houseName: "",
    imageUrl: "",
    location: "",
    status: "Available",
    houseType: "",
    },
    validationSchema: Yup.object({
    houseName: Yup.string()
        .min(3, "At least 3 Characters required")
        .max(20, "Maximum Characters allowed is 20")
        .required("Please enter your House Name *"),
    imageUrl: Yup.string().required("Please enter your ImageUrl *"),
    location: Yup.string()
        .required("Enter your House Location *")
        .min(3, "At least 3 characters required")
        .max(20, "Maximum Characters allowed is 20"),
    houseType: Yup.string()
        .required("Please select house type *"),
    }),
    onSubmit: (values) => {
    Service.addHouse(values).then((res) => {
        toast.success("New House Added Successfully");
        formik.resetForm();
        navigation(-1);
        console.log(res.data);
    });
    },
});
const cancel = () => {
    navigation("/admin/house");
}
return (
    <div>
    <h2 className="headingAddHouse">Add House</h2>
    <form onSubmit={formik.handleSubmit}>
        <div className="MainDiv">
        <div>
            <label htmlFor="houseName">House Name </label>
            <input
            id="editHouseName"
            type="text"
            name="houseName"
            placeholder="Enter House Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.houseName || ""}
            />
            {formik.touched.houseName && formik.errors.houseName ? (
            <p id="error">{formik.errors.houseName}</p>
            ) : null}
        </div>

        <div>
            <label htmlFor="houseType">House Type</label>
            <select
            id="houseType"
            name="houseType"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.houseType || ""}
            > <option value="" label="Select house type" />
            <option value="1BHK" label="1BHK" />
            <option value="2BHK" label="2BHK" />
            <option value="3BHK" label="3BHK" />
            <option value="4BHK" label="4BHK" />
            <option value="5BHK" label="5BHK" />
            </select>
            {formik.touched.houseType && formik.errors.houseType ? (
            <p id="error">{formik.errors.houseType}</p>
            ) : null}
        </div>

        <div>
            <label htmlFor="location">Location</label>
            <input
            id="location"
            type="text"
            name="location"
            placeholder="Enter House Location"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.location || ""}
            />
            {formik.touched.location && formik.errors.location ? (
            <p id="error">{formik.errors.location}</p>
            ) : null}
        </div>

        <div>
            <label htmlFor="imageUrl">House Image URL</label>
            <input
            id="imageUrl"
            type="text"
            name="imageUrl"
            placeholder="Enter House Image URL"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.imageUrl || ""}
            />
            {formik.touched.imageUrl && formik.errors.imageUrl ? (
            <p id="error">{formik.errors.imageUrl}</p>
            ) : null}
        </div>
        <div><button id="cancel" onClick={() => cancel()}>
            Cancel
        </button></div>
        <button id="addHouse" type="submit">
            Add House
        </button>
        </div>
    </form>
    </div>
  );
}
