import React, { useEffect, useState } from "react";

export default function ViewHouse() {
  let empId = localStorage.getItem('EmployeeId');
  const loadDataOnlyOnce = () => {
    console.log("heelo")
    Service.viewByEmployeeId(empId).then((res) => {
      console.log(res.data)
    });
  };
  useEffect(() => {
    loadDataOnlyOnce();
  }, []);
  return (
    <div>
      heelo
    </div>
  )
}
