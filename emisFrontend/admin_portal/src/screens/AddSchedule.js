import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { facScheduleURL, facURL } from "../common/constants";

const AddSchedule = () => {
  const location = useLocation()
  const [modulename, setModuleName] = useState('')
  const [startdate, setStartdate] = useState('')
  const [enddate, setEnddate] = useState('')
  const [batchS, setBatch] = useState('')
  const [startingTime, setStartingTime] = useState('')
  const [endingTime, setEndingTime] = useState('')
  const [duration, setDuration] = useState('')

  const addSchedule = () => {
    const data = {
      sdate:startdate,
      edate:enddate,
      module:modulename,
      batch:batchS,
      starts:startingTime,
      ends:endingTime,
      duration:duration
    }
    axios.post(facScheduleURL+location.state.fid,data).then(response=>{
      const result = response.data
      if (result.status === 'success')
        alert('Schedule Added')
    })
  }

  return (
    <div>
      <p class="title">Add Schedule for { location.state.name }</p>
      <table className="table table-success table-bordered table-striped">
        <tbody>
          <tr>
            <th class="col-sm-4 my-big-head" >Enter Module Name</th>
            <td> <input type="text" className="form-control" onChange={(e)=>setModuleName(e.target.value)} /> </td>
          </tr>
          <tr>
            <th class="col-sm-4 my-big-head" >Enter Start Date</th>
            <td> <input type="date" className="form-control" onChange={(e)=>setStartdate(e.target.value)} /> </td>
          </tr>
          <tr>
            <th class="col-sm-4 my-big-head" >Enter End Date</th>
            <td> <input type="date" className="form-control" onChange={(e)=>setEnddate(e.target.value)} /> </td>
          </tr>
          <tr>
            <th class="col-sm-4 my-big-head" >Enter Batch</th>
            <td> <input type="text" className="form-control" onChange={(e)=>setBatch(e.target.value)} /> </td>
          </tr>
          <tr>
            <th class="col-sm-4 my-big-head" >Starts at</th>
            <td> <input type="text" className="form-control" onChange={(e)=>setStartingTime(e.target.value)} /> </td>
          </tr>
          <tr>
            <th class="col-sm-4 my-big-head" >Ends at</th>
            <td> <input type="text" className="form-control" onChange={(e)=>setEndingTime(e.target.value)} /> </td>
          </tr>
          <tr>
            <th class="col-sm-4 my-big-head" >Duration</th>
            <td> <input type="text" className="form-control" onChange={(e)=>setDuration(e.target.value)} /> </td>
          </tr>
          <tr>
            <td> <button onClick={addSchedule} className="btn btn-success">Add</button> </td>
            <td> <Link to="/faculty" ><button className="btn btn-warning">Cancel</button></Link> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AddSchedule;
