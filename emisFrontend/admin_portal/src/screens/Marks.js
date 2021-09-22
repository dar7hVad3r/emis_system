import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import "../css/addedit.css";
import { useEffect } from "react";
import { marksURL, studURL } from "../common/constants";

const Marks = () => {
  const [students,setStudents] = useState([])
  const [selectedStudentsId,setsetStudentsId]=useState(0)
  const [theoryM, setTheory] = useState('')
  const [labM, setLab] = useState('')
  const [internalM, setInternal] = useState('')
  const [moduleName,setmoduleName]=useState('')
  const [ total,settotal]= useState(0)
  useEffect(()=>{
    getStudents()
  },[])
  const getStudents=()=>{
    axios.get(studURL).then(response =>{
      setStudents(response.data)
    })
  }
  const saveMarks = () =>{
    const data = {
      id:0,
      subject:moduleName,
      theory:theoryM,
      lab:labM,
      internal:internalM,
      outof:total
    }
    axios.post(marksURL+selectedStudentsId,data).then((response)=>{
      if( response.data==='success')
        alert('marks added successfully')
    })
  }
  return (
    <div>
      <p className="title">Add Marks</p>
      <table className="table table-bordered table-success table-striped">
        <tbody>
          <tr>
            <td>
              <label>Student ID :</label>
            </td>
            <td>
              <select className="form-control" onChange={e=>{setsetStudentsId(e.target.value)}}>
              {
                students.map((student)=>{
                  return    <option value={student.sid} id={student.sid} >
                  {student.sid} : {student.name}
                </option>
                })
                
              }
               {/* <option value="id">student id</option> */}
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>Enter Module :</label>
            </td>
            <td>
              <input className="form-control" onChange={e=>{setmoduleName(e.target.value)}} type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Enter Theory Marks :</label>
            </td>
            <td>
              <input type="text" onChange={e=>{setTheory(e.target.value)}} className="form-control" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Enter Lab Marks :</label>
            </td>
            <td>
              <input type="text" onChange={e=>{setLab(e.target.value)}} className="form-control" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Enter Internal Marks :</label>
            </td>
            <td>
              <input type="text" onChange={e=>{setInternal(e.target.value)}} className="form-control" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Out of Total :</label>
            </td>
            <td>
              <input type="text" onChange={e=>{settotal(e.target.value)}} className="form-control" />
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={saveMarks} className="btn btn-success">Save</button>
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
export default Marks;
