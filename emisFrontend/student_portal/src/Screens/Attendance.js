import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { attendanceURL } from "../common/constants";

const Attendance = () => {
  const user = useSelector((state) => state.user);
  const [attendanceRecords, setAttendanceRecords] = useState([])
  useEffect(() => {
    getAttendance();
  },[]);
  const getAttendance = () => {
    axios.get(attendanceURL + user).then((response) => {
      setAttendanceRecords(response.data)
    });
  };
  return (
    <div>
      <p className="title">Attendance</p>
      <Link to="/report">
        <button className="btn btn-warning my-button ">Report</button>
      </Link>
      <table className="table table-success table-striped table-bordered flex-row reverse">
        <thead>
          <tr>
            <th>Date</th>
            <th>Present/Absent</th>
          </tr>
        </thead>
        <tbody>
          {
            attendanceRecords.map((attendance)=>{
              return (
                <tr>
                  <td>{attendance.adate}</td>
                  <td>{attendance.status}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
