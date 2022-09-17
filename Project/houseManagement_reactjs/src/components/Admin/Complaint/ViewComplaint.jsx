import React from 'react'
import { useEffect, useState } from "react";
import './Complaint.css'
import { toast } from "react-toastify";
import Service from "../../service/Service"

export default function ViewCompliant() {

  const [complaint, setComplaint] = useState([]);

  const loadDataOnlyOnce = () => {
    Service.viewComplaintAdmin().then((res) => {
      console.log(res.data);
      setComplaint(res.data);
    }).catch(error => {
      setComplaint([]);
      toast.warn("No complaints right now!");
    });
  };

  useEffect(() => {
    loadDataOnlyOnce();
  }, []);
  const completed = (id) => {
    const Complaint = [{
      status: "Pending"
    }]
    Service.UpdateComplaintStatus(id, Complaint).then((res) => {
        toast.success("Employee Assigned Sucessfully!")
        loadDataOnlyOnce();
    });
  }
  return (
    <div className="complaintGrid">
      {complaint?.map((c, i) => (
          <div className="complaintContentGrid" key={i}>
            <div>Complaint Id: {c.complaintId}</div> 
            <div>House Id: {c.houseId}</div> 
            <div>Employee Id: {c.employeeId}</div> 
            <div>Complaint: {c.complaintType}</div>
            <div>Descrption: {c.complaintDescrption}</div> 
            {(() => {
              if (c.status === "Complaint") {
                return (
                  <button onClick={() => completed(c.complaintId)}>Assign Employee</button>
                )
              } else if (c.status === "Pending") {
                return (
                  <button id="pending">Pending</button>
                )
              } else {
                return (
                  <button id="completed">Completed</button>
                )
              }
            })()
            }            
          </div>
      ))}
    </div>
  )
}
