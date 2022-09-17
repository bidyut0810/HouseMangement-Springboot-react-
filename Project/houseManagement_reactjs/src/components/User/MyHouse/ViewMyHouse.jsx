import React, { useEffect, useState } from "react";
import Service from "../../service/Service";
import Point from  "../../../icon/Point.jpeg";
import { ButtonGroup, Card } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./MyHouse.css"

export default function ViewMyHouse() {
  let empId = localStorage.getItem('EmployeeId');
  const [employee, setEmployee] = useState([]);
  let [house, setHouse] = useState([]);
  let [houseDetails, setHouseDetails] = useState([]);
  const loadDataOnlyOnce = () => {
    empId = localStorage.getItem('EmployeeId');
    Service.viewByEmployeeId(empId).then((res) => {
      setEmployee(res.data);
      console.log(res.data);
      Service.viewByHouseId(res.data.houseId).then((res) => {
        setHouseDetails(res.data);
        console.log(res.data);
      });
    });
    Service.viewHouse().then((res) => {
      setHouse(res.data);
      console.log(res.data)
    });
  };
  useEffect(() => {
    loadDataOnlyOnce();
  }, []);
  const bookHouse = (id, type, status )=> {
    if(status === "Available") {
      const employeeSet = 
      {
        name: employee.name,
        emailId: employee.emailId,
        age: employee.age,
        workingExperience: employee.workingExperience,
        address: employee.address,
        designation: employee.designation,
        point: employee.point,
        houseId: id,
        houseType: type,
        status: "Pending"
      }
      console.log(employeeSet);
      Service.bookHouse(empId, employeeSet).then((res) => {
        setEmployee([]);
        setEmployee(res.data);
        window.location.reload();
        /*Service.UpdateHouseStatusNotAvailable(id, employeeSet).then((res) => {
          toast.success("Your house booked sucessfully...!");
        });*/
        console.log(res.data);
      });
    }else {
      toast.warn("House not available...!")
      toast.warn("Check the house status...!")
    }
  }
  const changeHouse = (id, type) => {
    const employeeSet = 
    {
      name: employee.name,
      emailId: employee.emailId,
      age: employee.age,
      workingExperience: employee.workingExperience,
      address: employee.address,
      designation: employee.designation,
      point: employee.point,
      houseId: "",
      houseType: "", 
      status: ""
    }
    console.log(employeeSet);
    Service.bookHouse(empId, employeeSet).then((res) => {
      setEmployee([]);
      setEmployee(res.data);
      console.log(id);
      window.location.reload();
      Service.UpdateHouseStatus(id, employeeSet).then((res) => {
        toast.success("Now you can choose your new house...!");
      });
      console.log(res.data);
    });
  }
  return (
    <div>
      <div className="pointDiv">
        <img className="point" src={Point} alt="" />
        <div className="pointValue">{employee.point}</div>
      </div>
      <div>
        <h2 className="welcomeName">Welcome, {employee.name}</h2>
        {(() => {
          if(employee.status ==="Pending") {
            return (
              <div>
                <div className="houseCard">
                  <div>
                    <img className="houseImage" src={houseDetails.imageUrl} alt="house" />
                  </div>
                  <div>
                  <Card className="houseDetails">
                      <Card.Img variant="top" src={house.imageUrl} />
                      <Card.Title className="myHouseCardTitle">
                        My House Information
                      </Card.Title>
                      <Card.Body className="houseCardGrid">
                          <Card.Title>House Name : </Card.Title>
                          <Card.Text>{houseDetails.houseName}</Card.Text>
                          <Card.Title>House Type : </Card.Title>
                          <Card.Text>{houseDetails.houseType}</Card.Text>
                          <Card.Title>Location :</Card.Title>
                          <Card.Text>{houseDetails.location}</Card.Text>
                          <Card.Title>Status :</Card.Title>
                          <Card.Text>{houseDetails.status}</Card.Text>
                          <Card.Title>Point :</Card.Title>
                          {(() => {
                            if (houseDetails.houseType === "1BHK") {
                              return (
                                <Card.Text>0 - 100</Card.Text>
                              )
                            } else if (houseDetails.houseType === "2BHK") {
                              return (
                                <Card.Text>101 - 200</Card.Text>
                              )
                            } else if (houseDetails.houseType === "3BHK") {
                              return (
                                <Card.Text>201 - 300</Card.Text>
                              )
                            } else if (houseDetails.houseType === "4BHK") {
                              return (
                                <Card.Text>301 - 400</Card.Text>
                              )
                            }else if (houseDetails.houseType === "5BHK") {
                              return (
                                <Card.Text>401 - 500</Card.Text>
                              )
                            }
                          })()}
                          <div></div>
                          <ButtonGroup className="cardButton">
                          <Button
                            id="changeBookHouse"
                            variant="primary"
                          >
                            Pending
                          </Button>
                          </ButtonGroup>
                      </Card.Body>
                      </Card>
                  </div>
                </div>
              </div>
            )
          }
          else if (employee.houseId !== "" && employee.houseId !== 0) {
            return (
              <div>
                <div className="houseCard">
                  <div>
                    <img className="houseImage" src={houseDetails.imageUrl} alt="house" />
                  </div>
                  <div>
                  <Card className="houseDetails">
                      <Card.Img variant="top" src={house.imageUrl} />
                      <Card.Title className="myHouseCardTitle">
                        My House Information
                      </Card.Title>
                      <Card.Body className="houseCardGrid">
                          <Card.Title>House Name : </Card.Title>
                          <Card.Text>{houseDetails.houseName}</Card.Text>
                          <Card.Title>House Type : </Card.Title>
                          <Card.Text>{houseDetails.houseType}</Card.Text>
                          <Card.Title>Location :</Card.Title>
                          <Card.Text>{houseDetails.location}</Card.Text>
                          <Card.Title>Status :</Card.Title>
                          <Card.Text>{houseDetails.status}</Card.Text>
                          <Card.Title>Point :</Card.Title>
                          {(() => {
                            if (houseDetails.houseType === "1BHK") {
                              return (
                                <Card.Text>0 - 100</Card.Text>
                              )
                            } else if (houseDetails.houseType === "2BHK") {
                              return (
                                <Card.Text>101 - 200</Card.Text>
                              )
                            } else if (houseDetails.houseType === "3BHK") {
                              return (
                                <Card.Text>201 - 300</Card.Text>
                              )
                            } else if (houseDetails.houseType === "4BHK") {
                              return (
                                <Card.Text>301 - 400</Card.Text>
                              )
                            }else if (houseDetails.houseType === "5BHK") {
                              return (
                                <Card.Text>401 - 500</Card.Text>
                              )
                            }
                          })()}
                          <div></div>
                          <ButtonGroup className="cardButton">
                          <Button
                            id="changeBookHouse"
                            onClick={() =>  changeHouse(houseDetails.houseId, houseDetails.houseType)}
                            variant="primary"
                          >
                            Change House
                          </Button>
                          </ButtonGroup>
                      </Card.Body>
                      </Card>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div>
                <div className="houseBookHeading">Book Your House</div>
                <div className="houseGrid">
                  {house.map((house, i) => (
                    <React.Fragment key={i}>
                      {(() => {
                      if (employee.point <= 100 && house.houseType === "1BHK") {
                        return (
                          <Card className="houseElement" key={i}>
                          <Card.Img variant="top" src={house.imageUrl} />
                          <Card.Title className="houseCardTitle">
                              {house.houseName}
                          </Card.Title>
                          <Card.Body className="houseCardGrid">
                              <Card.Title>House ID : </Card.Title>
                              <Card.Text>{house.houseId}</Card.Text>
                              <Card.Title>House Type : </Card.Title>
                              <Card.Text>{house.houseType}</Card.Text>
                              <Card.Title>Location :</Card.Title>
                              <Card.Text>{house.location}</Card.Text>
                              <Card.Title>Status :</Card.Title>
                              <Card.Text>{house.status}</Card.Text>
                              <Card.Title>Point :</Card.Title>
                              {(() => {
                                if (house.houseType === "1BHK") {
                                  return (
                                    <Card.Text>0 - 100</Card.Text>
                                  )
                                } else if (house.houseType === "2BHK") {
                                  return (
                                    <Card.Text>101 - 200</Card.Text>
                                  )
                                } else if (house.houseType === "3BHK") {
                                  return (
                                    <Card.Text>201 - 300</Card.Text>
                                  )
                                } else if (house.houseType === "4BHK") {
                                  return (
                                    <Card.Text>301 - 400</Card.Text>
                                  )
                                }else if (house.houseType === "5BHK") {
                                  return (
                                    <Card.Text>401 - 500</Card.Text>
                                  )
                                }
                              })()}
                              <div></div>
                              <ButtonGroup className="cardButton">
                              <Button
                                id="BookHouse"
                                onClick={() =>  bookHouse(house.houseId, house.houseType, house.status)}
                                variant="primary"
                              >
                                Book Now
                              </Button>
                              </ButtonGroup>
                          </Card.Body>
                        </Card>
                        )
                      } else if (house.houseType === "2BHK" && employee.point >= 101 && employee.point <= 200) {
                        return (
                          <Card className="houseElement" key={i}>
                          <Card.Img variant="top" src={house.imageUrl} />
                          <Card.Title className="houseCardTitle">
                              {house.houseName}
                          </Card.Title>
                          <Card.Body className="houseCardGrid">
                              <Card.Title>House ID : </Card.Title>
                              <Card.Text>{house.houseId}</Card.Text>
                              <Card.Title>House Type : </Card.Title>
                              <Card.Text>{house.houseType}</Card.Text>
                              <Card.Title>Location :</Card.Title>
                              <Card.Text>{house.location}</Card.Text>
                              <Card.Title>Status :</Card.Title>
                              <Card.Text>{house.status}</Card.Text>
                              <Card.Title>Point :</Card.Title>
                              {(() => {
                                if (house.houseType === "1BHK") {
                                  return (
                                    <Card.Text>0 - 100</Card.Text>
                                  )
                                } else if (house.houseType === "2BHK") {
                                  return (
                                    <Card.Text>101 - 200</Card.Text>
                                  )
                                } else if (house.houseType === "3BHK") {
                                  return (
                                    <Card.Text>201 - 300</Card.Text>
                                  )
                                } else if (house.houseType === "4BHK") {
                                  return (
                                    <Card.Text>301 - 400</Card.Text>
                                  )
                                }else if (house.houseType === "5BHK") {
                                  return (
                                    <Card.Text>401 - 500</Card.Text>
                                  )
                                }
                              })()}
                              <div></div>
                              <ButtonGroup className="cardButton">
                              <Button
                                id="BookHouse"
                                onClick={() =>  bookHouse(house.houseId, house.houseType, house.status)}
                                variant="primary"
                              >
                                Book Now
                              </Button>
                              </ButtonGroup>
                          </Card.Body>
                        </Card>
                        )
                      } else if (employee.point >= 201 && employee.point <= 300 && house.houseType === "3BHK") {
                        return (
                          <Card className="houseElement" key={i}>
                          <Card.Img variant="top" src={house.imageUrl} />
                          <Card.Title className="houseCardTitle">
                              {house.houseName}
                          </Card.Title>
                          <Card.Body className="houseCardGrid">
                              <Card.Title>House ID : </Card.Title>
                              <Card.Text>{house.houseId}</Card.Text>
                              <Card.Title>House Type : </Card.Title>
                              <Card.Text>{house.houseType}</Card.Text>
                              <Card.Title>Location :</Card.Title>
                              <Card.Text>{house.location}</Card.Text>
                              <Card.Title>Status :</Card.Title>
                              <Card.Text>{house.status}</Card.Text>
                              <Card.Title>Point :</Card.Title>
                              {(() => {
                                if (house.houseType === "1BHK") {
                                  return (
                                    <Card.Text>0 - 100</Card.Text>
                                  )
                                } else if (house.houseType === "2BHK") {
                                  return (
                                    <Card.Text>101 - 200</Card.Text>
                                  )
                                } else if (house.houseType === "3BHK") {
                                  return (
                                    <Card.Text>201 - 300</Card.Text>
                                  )
                                } else if (house.houseType === "4BHK") {
                                  return (
                                    <Card.Text>301 - 400</Card.Text>
                                  )
                                }else if (house.houseType === "5BHK") {
                                  return (
                                    <Card.Text>401 - 500</Card.Text>
                                  )
                                }
                              })()}
                              <div></div>
                              <ButtonGroup className="cardButton">
                              <Button
                                id="BookHouse"
                                onClick={() =>  bookHouse(house.houseId, house.houseType, house.status)}
                                variant="primary"
                              >
                                Book Now
                              </Button>
                              </ButtonGroup>
                          </Card.Body>
                        </Card>
                        )
                      } else if (employee.point >= 301 && employee.point <= 400 && house.houseType === "4BHK") {
                        return (
                          <Card className="houseElement" key={i}>
                          <Card.Img variant="top" src={house.imageUrl} />
                          <Card.Title className="houseCardTitle">
                              {house.houseName}
                          </Card.Title>
                          <Card.Body className="houseCardGrid">
                              <Card.Title>House ID : </Card.Title>
                              <Card.Text>{house.houseId}</Card.Text>
                              <Card.Title>House Type : </Card.Title>
                              <Card.Text>{house.houseType}</Card.Text>
                              <Card.Title>Location :</Card.Title>
                              <Card.Text>{house.location}</Card.Text>
                              <Card.Title>Status :</Card.Title>
                              <Card.Text>{house.status}</Card.Text>
                              <Card.Title>Point :</Card.Title>
                              {(() => {
                                if (house.houseType === "1BHK") {
                                  return (
                                    <Card.Text>0 - 100</Card.Text>
                                  )
                                } else if (house.houseType === "2BHK") {
                                  return (
                                    <Card.Text>101 - 200</Card.Text>
                                  )
                                } else if (house.houseType === "3BHK") {
                                  return (
                                    <Card.Text>201 - 300</Card.Text>
                                  )
                                } else if (house.houseType === "4BHK") {
                                  return (
                                    <Card.Text>301 - 400</Card.Text>
                                  )
                                }else if (house.houseType === "5BHK") {
                                  return (
                                    <Card.Text>401 - 500</Card.Text>
                                  )
                                }
                              })()}
                              <div></div>
                              <ButtonGroup className="cardButton">
                              <Button
                                id="BookHouse"
                                onClick={() =>  bookHouse(house.houseId, house.houseType, house.status)}
                                variant="primary"
                              >
                                Book Now
                              </Button>
                              </ButtonGroup>
                          </Card.Body>
                        </Card>
                        )
                      }else if (employee.point >= 401 && house.houseType === "5BHK") {
                        return (
                          <Card className="houseElement" key={i}>
                          <Card.Img variant="top" src={house.imageUrl} />
                          <Card.Title className="houseCardTitle">
                              {house.houseName}
                          </Card.Title>
                          <Card.Body className="houseCardGrid">
                              <Card.Title>House ID : </Card.Title>
                              <Card.Text>{house.houseId}</Card.Text>
                              <Card.Title>House Type : </Card.Title>
                              <Card.Text>{house.houseType}</Card.Text>
                              <Card.Title>Location :</Card.Title>
                              <Card.Text>{house.location}</Card.Text>
                              <Card.Title>Status :</Card.Title>
                              <Card.Text>{house.status}</Card.Text>
                              <Card.Title>Point :</Card.Title>
                              {(() => {
                                if (house.houseType === "1BHK") {
                                  return (
                                    <Card.Text>0 - 100</Card.Text>
                                  )
                                } else if (house.houseType === "2BHK") {
                                  return (
                                    <Card.Text>101 - 200</Card.Text>
                                  )
                                } else if (house.houseType === "3BHK") {
                                  return (
                                    <Card.Text>201 - 300</Card.Text>
                                  )
                                } else if (house.houseType === "4BHK") {
                                  return (
                                    <Card.Text>301 - 400</Card.Text>
                                  )
                                }else if (house.houseType === "5BHK") {
                                  return (
                                    <Card.Text>401 - 500</Card.Text>
                                  )
                                }
                              })()}
                              <div></div>
                              <ButtonGroup className="cardButton">
                              <Button
                                id="BookHouse"
                                onClick={() =>  bookHouse(house.houseId, house.houseType, house.status)}
                                variant="primary"
                              >
                                Book Now
                              </Button>
                              </ButtonGroup>
                          </Card.Body>
                        </Card>
                        )
                      }
                    })()}
                    </React.Fragment>
                  ))}
              </div>
              </div>
            )
          }
        })()}            
      </div>
    </div>
  )
}
