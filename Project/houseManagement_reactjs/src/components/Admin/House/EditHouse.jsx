import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import Service from "../../../components/service/Service";

export default function EditHouse() {
let navigation = useNavigate();
let { houseId } = useParams();
const [initialValues, setInitialValues] = useState([]);
const loadDataOnlyOnce = () => {
    Service.viewByHouseId(houseId).then((res) => {
      console.log(res.data);
      const updateHouse = {
        houseName: res.data.houseName,
        imageUrl: res.data.imageUrl,
        location: res.data.location,
        status: res.data.status,
        houseType: res.data.houseType,
      };
      console.log(updateHouse);
      setInitialValues(updateHouse);
    });
  };
  useEffect(() => {
    loadDataOnlyOnce();
  }, []);

const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
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
        console.log(values)
        Service.UpdateHouse(houseId, values).then((res) => {
            toast.success("House updated Successfully");
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
    <h2 className="headingAddHouse">Edit House</h2>
    <form onSubmit={formik.handleSubmit}>
        <div className="MainDiv">
            <div>
                <label htmlFor="houseName">Academy Name </label>
                <input
                    id="houseName"
                    type="text"
                    name="houseName"
                    placeholder="Enter the House Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.houseName || ""}
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
                    placeholder="Enter the House Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.houseType || ""}
                >
                    <option value="" label="Select house type" />
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
                value={formik.values.location || ""}
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
                value={formik.values.imageUrl || ""}
                />
                {formik.touched.imageUrl && formik.errors.imageUrl ? (
                <p id="error">{formik.errors.imageUrl}</p>
                ) : null}
            </div>

        <button id="addHouse" type="submit">
            Update House
        </button>
        </div>
    </form>
    </div>
    );
}
