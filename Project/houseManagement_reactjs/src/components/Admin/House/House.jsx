import React, { useEffect, useState } from "react";
import Service from "../../../components/service/Service";
import { ButtonGroup, Card } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./house.css"

export default function House() {
  let navigate = useNavigate();
  let [house, setHouse] = useState([]);
  let [search, setSearch] = useState("");
  let [O1BHK, set1BHK] = useState(0);
  let [T2BHK, setT2BHK] = useState(0);
  let [T3BHK, setT3BHK] = useState(0);
  let [F4OBHK, setF4BHK] = useState(0);
  let [F5BHK, setF5BHK] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const loadDataOnlyOnce = () => {
    Service.viewHouse().then((res) => {
      setHouse(res.data);
      for(var i=0; i<res.data.length; i++) {
        console.log(res.data.length)
        if(res.data[i].houseType === "1BHK") {
          set1BHK(O1BHK+1);
        }else if(res.data[i].houseType === "2BHK") {
          setT2BHK(T2BHK+1);
        }else if(res.data[i].houseType === "3BHK") {
          setT3BHK(T3BHK+1);
        }else if(res.data[i].houseType === "4BHK") {
          setF4BHK(F4OBHK+1);
        }else if(res.data[i].houseType === "5BHK") {
          setF5BHK(F5BHK+1);
          console.log("house" + F5BHK)
        }
      }
      setLoading(false)
      console.log(res.data)
    });
  };
  useEffect(() => {
    loadDataOnlyOnce();
  }, []);
  const changeSearchHandler = (event) => {
    setSearch(event.target.value);
  };
  const findHouse = () => {
    if (search === "") {
      Service.viewHouse().then((res) => {
        setHouse(res.data);
      });
    } else {
      Service.viewAcademyByName(search).then((res) => {
        setHouse(res.data);
      });
    }
  };
  const editHouse = (id) => {
    navigate(`/admin/editHouse/${id}`);
  };
  const deleteHouse = (id) => {
    Service.deleteHouse(id).then((res) => {
      setHouse(house.filter((house) => house.houseId !== id));
      toast.success("House Deleted Successfully !");
    });
  };
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div>
        <div className="searchBar">
            <input
            className="search"
            type="text"
            placeholder="Type here to search house"
            value={search}
            onChange={changeSearchHandler}
            />
            <input
            id="houseSearch"
            type="submit"
            value="Search"
            onClick={() => findHouse()}
            />
            <span id="addHouseBtn">
            <Link to="/admin/addHouse">Add House</Link>
            </span>
        </div>
        { !isLoading && (
          <>
            <table className="complaintTable">
                <thead>
                </thead>
                <tbody>
                  <tr>
                    <td>1BHK</td>
                    <td>{O1BHK}</td>
                    <td>2BHK</td>
                    <td>{T2BHK}</td>
                    <td>3BHK</td>
                    <td>{T3BHK}</td>
                    <td>4BHK</td>
                    <td>{F4OBHK}</td>
                    <td>5BHK</td>
                    <td>{F5BHK}</td>
                  </tr>
                </tbody>
            </table>
            </>
        )}
        
        <div className="houseGrid">
            {house.map((house, i) => (
            <React.Fragment key={i}>
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
                        id="editHouse"
                        onClick={() => editHouse(house.houseId)}
                        variant="primary"
                    >
                        Edit
                    </Button>
                    <Button
                        id="deleteHouse"
                        onClick={() => deleteHouse(house.houseId)}
                        variant="primary"
                    >
                        Delete
                    </Button>
                    </ButtonGroup>
                </Card.Body>
                </Card>
            </React.Fragment>
            ))}
        </div>
    </div>
  );
}
