import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Service from "../../../components/service/Service";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Employee.css"
import "react-toastify/dist/ReactToastify.css";

export default function Employee() {
    let navigate = useNavigate();
    let [employee, setEmployee] = useState([]);
    let [search, setSearch] = useState("");

    const loadDataOnlyOnce = () => {
        Service.viewEmployee().then((res) => {
            setEmployee(res.data);
            console.log(res.data);
        });
    };
    useEffect(() => {
        loadDataOnlyOnce();
    }, []);
    const changeSearchHandler = (event) => {
        setSearch(event.target.value);
    };
    const findStudent = () => {
        if (search === "") {
            Service.viewEmployee().then((res) => {
                setEmployee(res.data);
                console.log(res.data);
            });
        } else {
            Service.FindStudentByName(search).then((res) => {
                setEmployee(res.data);
            });
        }
    };
    const editEmployee = (id) => {
        navigate(`/admin/editEmployee/${id}`);
    };
    const deleteEmployee = (id) => {
        Service.deleteEmployee(id).then((res) => {
            toast.success("Employee ID " + id + " Deleted Sucessfully");
            setEmployee(employee.filter((student) => student.employeeId !== id));
        });
    };
    return (
    <div>
        <div>
            <div className="searchEmp">
                <input
                className="search"
                type="text"
                placeholder="Type here to search Employee"
                value={search}
                onChange={changeSearchHandler}
                />
                <input
                id="employeeSearch"
                type="submit"
                value="Search"
                onClick={() => findStudent()}
                />
                <span id="addHouseBtn">
                    <Link to="/admin/addEmployee">Add Employee</Link>
                </span>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Email Id</th>
                    <th>Designation</th>
                    <th>House ID</th>
                    <th>House Type</th>
                    <th>Point</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody className="studentList">
                {employee?.map((list, i) => (
                <React.Fragment key={i}>
                    <tr key={i}>
                    <td> {list.employeeId} </td>
                    <td> {list.name}</td>
                    <td> {list.emailId}</td>
                    <td> {list.designation}</td>
                    <td> {list.houseId}</td>
                    <td> {list.houseType}</td>
                    <td> {list.point}</td>
                    <td>
                        <Button
                        id="adminEditEmp"
                        onClick={() => editEmployee(list.employeeId)}
                        >
                        Edit
                        </Button>
                        <Button
                        id="adminDeleteEmp"
                        onClick={() => deleteEmployee(list.employeeId)}
                        >
                        Delete
                        </Button>
                    </td>
                    </tr>
                    </React.Fragment>
                ))}
                </tbody>
            </table>
        </div>
    </div>
    );
};

    
