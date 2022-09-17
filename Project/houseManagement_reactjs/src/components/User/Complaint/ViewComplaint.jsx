import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Service from "../../service/Service";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './Complaint.css'
import "react-toastify/dist/ReactToastify.css";

export default function ViewComplaint() {
  let navigate = useNavigate();
    let [complaint, setComplaint] = useState([]);
    let complaintData;
    let empId = localStorage.getItem('EmployeeId');
    const loadDataOnlyOnce = () => {
      Service.findByComplaintId(empId).then((res) => {
        complaintData = Array.from(res.data) 
        setComplaint(res.data);
        console.log(res.data);
      });
    };
    useEffect(() => {
      loadDataOnlyOnce();
    }, []);
    const done = (id, status) => {
      if(status === "Pending") {
        const Complaint = [{
          status: "Completed"
        }]
        Service.DoneComplaintStatus(id, Complaint).then((res) => {
            toast.success("Your Complaint is get Solved...!")
            loadDataOnlyOnce();
        });
      }else if(status === "Completed") {
        toast.success("Your Complaint already get Solved...!")
      }else if(status === "Complaint") {
        toast.warn("Wait for sometime employee to assign...!")
      }
    }
  return (
    <div>
      <div >
        <Link id="addComplaint" to="/user/addComplaint">Add Complaint</Link>
      </div>
      <div>
        l
      </div>
      <div>
        <table className="complaintTable">
            <thead>
            <tr>
                <th>Complaint ID</th>
                <th>House Id</th>
                <th>Employee Id</th>
                <th>Complaint Type</th>
                <th>Complaint Descrption</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
              {complaint?.map((list, i) => (
                <tr key={i}>
                  <td> {list.complaintId} </td>
                  <td> {list.houseId}</td>
                  <td> {list.employeeId}</td>
                  <td> {list.complaintType}</td>
                  <td> {list.complaintDescrption}</td>
                  <td> {list.status}</td>
                  <Button
                    id="complete"
                    onClick={() =>  done(list.complaintId, list.status)}
                    >
                    Done
                  </Button>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}
