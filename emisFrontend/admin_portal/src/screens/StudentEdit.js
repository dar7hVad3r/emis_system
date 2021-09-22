import axios from "axios";
import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { studURL } from "../common/constants";

const StudentEdit = (student) => {
  const history = useHistory();
  const [id, setId] = useState(0);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [area, setarea] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pin, setpin] = useState("");
  const location = useLocation()

  const goBack = () => {
    history.push("/student");
  };

  const editStudent = () => {
    axios.post(studURL, location.state).then((response) => {
      const result = response.data;
      if (result.status === "success") history.push("/student");
      else alert("adding student failed");
    });
  };

  return (
    <div>
      <p className="title">Edit {location.state.name}</p>
      <table className="table table-bordered table-success table-striped">
        <tbody>
          <tr>
            <td>
              <label>Name:</label>
            </td>
            <td>
              <input className="form-control" type="text" placeholder={location.state.name} onChange={(e) => location.state.name=e.target.value} />
            </td>
            <td>
              <label>Email:</label>
            </td>
            <td>
              <input className="form-control" type="text" placeholder={location.state.email} onChange={(e) => location.state.email = e.target.value} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Phone:</label>
            </td>
            <td>
              <input className="form-control" type="text" placeholder={location.state.phone} onChange={(e) => location.state.phone = e.target.value} />
            </td>
            <td>
              <label>Password:</label>
            </td>
            <td>
              <input className="form-control"
                type='password'
                placeholder={"*********"}
                onChange={(e) => location.state.password = e.target.value}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Area:</label>
            </td>
            <td>
              <input className="form-control" type="text" placeholder={location.state.area} onChange={(e) => location.state.area = e.target.value} />
            </td>
            <td>
              <label>City:</label>
            </td>
            <td>
              <input className="form-control" type="text" placeholder={location.state.city} onChange={(e) => location.state.city = e.target.value} />
            </td>
          </tr>
          <tr>
            <td>
              <label>State:</label>
            </td>
            <td>
              <input className="form-control" type="text" placeholder={location.state.state} onChange={(e) => location.state.state = e.target.value} />
            </td>
            <td>
              <label>Pin:</label>
            </td>
            <td>
              <input className="form-control" type="text" placeholder={location.state.pin} onChange={(e) => location.state.pin = e.target.value} />
            </td>
          </tr>

          <tr>
            <td colSpan="1">
              {" "}
              <button className="btn btn-success" onClick={editStudent}>
                Save
              </button>{" "}
            </td>
            <td colSpan="3">
              {" "}
              <Link to="/student">
                <button className="btn btn-warning" onClick={goBack}>
                  Cancel
                </button>
              </Link>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentEdit