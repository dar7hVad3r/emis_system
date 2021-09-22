import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { marksMapping, URL } from "../common/constants";
import MarksRow from "../components/MarksRow";

const Report = () => {
  const [subjects, setSubjects] = useState([]);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    getMarks();
  }, []);

  const getMarks = () => {
    axios.get(URL + marksMapping + user).then((response) => {
      const result = response.data;
      if (result.status === "success") setSubjects(result.data);
      else alert("error loading data");
    });
  };

  return (
    <div>
      <p className="title">Report</p>
      <Link to="/attendance" ><button className="btn btn-warning my-button ">Attendance</button></Link>
      <table className="table table-striped table-success table-bordered">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Theory</th>
            <th>Internal</th>
            <th>Lab</th>
            <th>Total</th>
            <th>Out Of</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => {
            return <MarksRow subject={subject} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
