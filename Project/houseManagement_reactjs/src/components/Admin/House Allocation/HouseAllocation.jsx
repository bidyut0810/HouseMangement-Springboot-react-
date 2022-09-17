import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Service from "../../service/Service";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HouseAllocation() {
    let navigate = useNavigate();
    let [houseAllocation, setHouseAllocation] = useState([]);
    const loadDataOnlyOnce = () => {
        Service.viewEmployee().then((res) => {
            setHouseAllocation(res.data);
            console.log(res.data);
        });
    };
    useEffect(() => {
      loadDataOnlyOnce();
    }, []);
    const approve = (empId, id, type, name, emailId, age, work, address, des, point) => {
        const employeeSet = 
      {
        name: name,
        emailId: emailId,
        age: age,
        workingExperience: work,
        address: address,
        designation: des,
        point: point,
        houseId: id,
        houseType: type,
        status: "Booked"
      }
      console.log(empId);
      Service.UpdateEmployee(empId, employeeSet).then((res) => {
        Service.UpdateHouseStatusNotAvailable(id, employeeSet).then((res) => {
          toast.success("House alloted sucessfully...!");
          window.location.reload();
        });
        console.log(res.data);
      });
    }
  return (
    <div>
        <table className="complaintTable">
            <thead>
            <tr>
                <th>Employee Id</th>
                <th>House Id</th>
                <th>House Type</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
              {houseAllocation?.map((list, i) => (
                <>
                  {(() => {
                    if (list.houseType !== "") {
                      return (
                        <tr key={i}>
                          <td> {list.employeeId}</td>
                          <td> {list.houseId}</td>
                          <td> {list.houseType}</td>
                          <td> {list.status}</td>
                          <Button
                              id="complete"
                              onClick={() =>  approve(list.employeeId, list.houseId, list.houseType, list.name, list.emailId, list.age, list.workingExperience, list.address, list.designation, list.point)}
                              >
                              Approve
                          </Button>
                        </tr>  
                      )
                    }
                  })()}
                </>
              ))}
            </tbody>
        </table>
    </div>
  )
}
