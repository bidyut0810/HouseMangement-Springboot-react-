import axios from "axios";
import authHeader from "./AuthHeader";


const REST_API_URL = "http://localhost:8081";



// axios.interceptors.request.use(function (config ) {
//   const token = localStorage.getItem('token');
//   if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });



class Service {

  // Login and SignUp
  CheckIsUserPresent(email, empId) {
    return axios.get(REST_API_URL + "/Signup/" + email +"/" + empId);
  }
  createAccount(user) {
    return axios.post(REST_API_URL + "/addUser", user);
  }
  checkEmployeeId(empId) {
    return axios.get(REST_API_URL + "/checkEmployeeId/" + empId);
  }
  login(empId, password) {
    console.log("hello ther")
    return axios.get(REST_API_URL + "/login/" + empId + "/" + password,{headers:authHeader()});
  }
  authenticate(userDetails) {
    
    let ans= axios.post(REST_API_URL + "/authenticate",userDetails);
    console.log(ans)
    return ans;
  }
  


//House

  addHouse(house) {
    return axios.post(REST_API_URL + "/addHouse", house);
  }
  viewHouse() {
    return axios.get(REST_API_URL + "/viewHouse");
  }
  viewByHouseId(id) {
    return axios.get(REST_API_URL + "/findByHouseId/"+id);
  }
  UpdateHouse(id, house) {
    return axios.put(REST_API_URL + "/editHouse/" + id, house);
  }
  UpdateHouseStatus(id, house) {
    return axios.put(REST_API_URL + "/houseStatusOpen/" + id, house);
  }
  UpdateHouseStatusNotAvailable(id, house) {
    return axios.put(REST_API_URL + "/houseStatus/" + id, house);
  }
  deleteHouse(id) {
    return axios.delete(REST_API_URL + "/deleteHouse/" + id);
  }
  bookHouse(id, house) {
    return axios.put(REST_API_URL + "/bookHouse/" + id, house);
  }

//Employee
  addEmployee(employee) {
    return axios.post(REST_API_URL + "/addEmployee", employee);
  }
  viewEmployee() {
    return axios.get(REST_API_URL + "/viewEmployee");
  }
  viewByEmployeeId(id) {
    return axios.get(REST_API_URL + "/findByEmployeeId/"+id);
  }
  UpdateEmployee(id, employee) {
    return axios.put(REST_API_URL + "/editEmployee/" + id, employee);
  }
  deleteEmployee(id) {
    return axios.delete(REST_API_URL + "/deleteEmployee/" + id);
  }



  //Complaint
  addComplaint(Complaint) {
    return axios.post(REST_API_URL + "/addComplaint", Complaint);
  }
  UpdateComplaintStatus(id, status) {
    return axios.put(REST_API_URL + "/editComplaint/" + id, status);
  }
  DoneComplaintStatus(id, status) {
    return axios.put(REST_API_URL + "/editComplaintDone/" + id, status);
  }
  viewComplaintAdmin() {
    return axios.get(REST_API_URL + "/viewComplaintAdmin");
  }
  findByComplaintId(id) {
    return axios.get(REST_API_URL + "/findByEmployeeIdComplaint/" + id);
  }
}
export default new Service();
