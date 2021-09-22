import "../css/StudentProfile.css";
import StudentProfileEdit from "./StudentProfileEdit";
import { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import axios from "axios";
import { URL, id, mediaURL, photoURL } from "../common/constants";
import { useSelector } from "react-redux";

const StudentProfile = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const [photo, setPhoto] = useState("");
  const [student, setstudent] = useState({});
  useEffect(() => {
    getstudent();
  }, []);

  // console.log(message)
  const getstudent = () => {
    axios.get(URL + user).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setstudent(result.data);
        console.log(id);
      } else {
        alert("error while loading list of student");
      }
    });

    axios.get(mediaURL + user).then((response) => {
      const result = response.data;
      if (result.status === "success" && result.data[0] != undefined) {
        setPhoto(result.data[0].photo);
        console.log(result.data[0].photo);
      } else {
      }
    });
  };

  const edit = () => {
    history.push("/edit", student);
  };

  return (
    <div>
      <div className="title">Personal Information</div>

      <button className="btn btn-success my-button" onClick={edit}>
        {" "}
        Edit{" "}
      </button>
      <table className="table table-bordered table-success table-striped">
        <tbody>
          <tr>
            <td colSpan="2">
              <img
                src={photoURL + photo}
                class="img-responsive my-photo"
                alt="Image"
              />
            </td>
          </tr>
          <tr>
            <th>
              <label>Student Id</label>
            </th>
            <td>{student.sid}</td>
          </tr>

          <tr>
            <th>
              <label>PRN Number</label>
            </th>
            <td>{student.sid}</td>
          </tr>
          <tr>
            <th>
              <label>Name</label>
            </th>
            <td>{student.name}</td>
          </tr>
          <tr>
            <th>
              <label>Email</label>
            </th>
            <td>{student.email}</td>
          </tr>
          <tr>
            <th>
              <label>Phone</label>
            </th>
            <td>{student.phone}</td>
          </tr>
          <tr>
            <th>
              <label>Area</label>
            </th>
            <td>{student.area}</td>
          </tr>
          <tr>
            <th>
              <label>City</label>
            </th>
            <td>{student.city}</td>
          </tr>
          <tr>
            <th>
              <label>State</label>
            </th>
            <td>{student.state}</td>
          </tr>
          <tr>
            <th>
              <label>Country</label>
            </th>
            <td>India</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default StudentProfile;
