import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/addedit.css";
import { attendanceURL, studURL } from "../common/constants";
import { useSelector } from "react-redux";

const Attendance = () => {
  // const []
  const user = useSelector((state) => state.user);
  const [students, setstudents] = useState([]);
  const [sid, setSid] = useState(0)
  const [attendanceStatus, setAttendanceStatus] = useState("");
  const [date, setDate] = useState('');
  useEffect(() => {
    console.log("helllllo");
    getStudents();
  }, []);

  const getStudents = () => {
    axios.get(studURL).then((response) => {
      setstudents(response.data);
    });
  };

  const saveStatus = (e) => {
    setAttendanceStatus(e.target.value);
  };

  const saveData = () => {
    const response={
      id:0,
      adate:date,
      status:attendanceStatus
    }
    axios.post(attendanceURL+sid, response).then((response)=>{
      const result = response.data
      if ( result.status === 'success' ){
        alert("Attendance Record Added")
      }
    })
  }

  return (
    <div>
      <p className="title">Add Attendance</p>
      <table className="table table-bordered table-success table-striped">
        <tbody>
          <tr>
            <th>
              <label>Select Student :</label>
            </th>
            <td>
              <select className="form-control" onChange={(e)=>{setSid(e.target.value)}} >
                {students.map((student) => {
                  return (
                    <option value={student.sid} id={student.sid} >
                      {student.sid} : {student.name}
                    </option>
                  );
                })}
                {/* <option value="id">student id</option> */}
              </select>
            </td>
          </tr>
          <tr>
            <th>
              <label>Select Choice :</label>
            </th>
            <td>
              <div class="form-check">
                <input
                  onClick={saveStatus}
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="present"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Present
                </label>
              </div>
              <div class="form-check">
                <input
                  onClick={saveStatus}
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="absent"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Absent
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th>Select Date :</th>
            <td>
              <input className="form-control" type="date" onSelect={(e)=>setDate(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>
              <button
                type="submit"
                onClick={saveData}
                className="btn btn-success"
              >
                Save
              </button>
            </td>
            <td>
              <Link to="/home">
                <button className="btn btn-warning">Cancel</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Attendance;
