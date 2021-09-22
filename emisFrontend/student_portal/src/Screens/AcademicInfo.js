import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AcademicURL } from "../common/constants";

const AcademicInfo = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory()
  const [tenth, setTenth] = useState({})
  const [twelfth, setTwelfth] = useState({})
  const [diploma, setDiploma] = useState({})
  const [engg, setEngg] = useState({})
  useEffect(() => {
    getAcademicDetails()
    checkTDdetails()
  }, []);

  const checkTDdetails = () => {
      if ( tenth.institute == null ){
        setTenth({
            school : "not available",
            board : "not available",
            marks : "not available",
            passingYear : "not available"
          }
          )
      }
      if ( twelfth.institute == null ){
          setTwelfth({
            school : "not available",
            board : "not available",
            marks : "not available",
            passingYear : "not available"
          }
          )
      } 
      if ( diploma.institute == null ) {
          setDiploma({
            institute : "not available",
            university : "not available",
            marks : "not available",
            passingYear : "not available"
          })
      }
      if ( engg.institute == null ) {
          setEngg({
            institute : "not available",
            university : "not available",
            marks : "not available",
            passingYear : "not available"
          })
      }
  }

  const add = () => {
      const academics = {
          "tenth":tenth,
          "twelfth":twelfth,
          "diploma":diploma,
          "engg":engg
      }
      history.push("/editacademic", academics)
  }

  const getAcademicDetails = () => {
    axios.get(AcademicURL + user).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        if ( result.tenth != null ) setTenth(result.tenth)
        if ( result.twelfth != null ) setTwelfth(result.twelfth)
        if ( result.diploma != null ) setDiploma(result.diploma)
        if ( result.engg != null ) setEngg(result.engg)
      } else {
        alert("problem loading data");
      }
    });
  };

  return (
    <div>
      <p className="title">Academic Information</p>
      <button className="btn btn-success my-button" onClick={add} >Add/Edit</button>
      <table className="table table-striped table-success table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>SSC</th>
            <th>HSC</th>
            <th>Diploma</th>
            <th>Engg</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Institute</th>
            <td>{tenth.school}</td>
            <td>{twelfth.school}</td>
            <td>{diploma.institute}</td>
            <td>{engg.institute}</td>
          </tr>
          <tr>
            <th>Board/University</th>
            <td>{tenth.board}</td>
            <td>{twelfth.board}</td>
            <td>{diploma.university}</td>
            <td>{engg.university}</td>
          </tr>
          <tr>
            <th>Percentage</th>
            <td>{tenth.marks}</td>
            <td>{twelfth.marks}</td>
            <td>{diploma.marks}</td>
            <td>{engg.marks}</td>
          </tr>
          <tr>
            <th>Passing Year</th>
            <td>{tenth.passingYear}</td>
            <td>{twelfth.passingYear}</td>
            <td>{diploma.passingYear}</td>
            <td>{engg.passingYear}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AcademicInfo;
