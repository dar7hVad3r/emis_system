import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router"
import { scheduleURL } from "../common/constants"

const StudentSchedule = () => {

    const [moduleName, setModuleName] = useState('')
    const [startingDate, setstartingDate] = useState('')
    const [endingDate, setendingDate] = useState('')
    const [from, setfrom] = useState('')
    const [to, setto] = useState('')
    const [moduleDuration, setduration] = useState('')
    const history = useHistory()
    const goBack = () => {
        history.push('/student')
    }
    const addSchedule = () => {
        const data = {
            id:0,
            sdate:startingDate,
            edate:endingDate,
            module:moduleName,
            starts:from,
            ends:to,
            duration:moduleDuration
        }
        axios.post(scheduleURL, data).then((response)=>{
            const result = response.data
            if ( result.status === 'success' ){
                alert('schedule successfully')
            }
        })
    }

    const clearSchedules = () => {
        axios.delete(scheduleURL).then((response)=>{
            const result = response.data
            if ( result.status === 'success' ){
                alert("Schedule Record Cleared!!")
            }
        })
    }

    return (
        <div className="container">
            <p className="title" >Add Schedule</p>
            <h2>Enter Schedule Details
            <button className="btn btn-danger my-button" onClick={clearSchedules} >Clear Schedules</button>
            </h2>
            <table className="table table-success table-bordered table-striped">
                <tbody>
                    <tr>
                        <th class="col-sm-4 my-big-head" >Enter Module Name</th>
                        <td> <input type="text" className="form-control" onChange={(e)=>setModuleName(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <th class="col-sm-4 my-big-head" >Enter Starting Date</th>
                        <td> <input type="date" className="form-control" onChange={(e)=>setstartingDate(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <th class="col-sm-4 my-big-head" >Enter Ending Date</th>
                        <td> <input type="date" className="form-control" onChange={(e)=>setendingDate(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <th class="col-sm-4 my-big-head" >Time From</th>
                        <td> <input type="text" className="form-control" onChange={(e)=>setfrom(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <th class="col-sm-4 my-big-head" >Time To</th>
                        <td> <input type="text" className="form-control" onChange={(e)=>setto(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <th class="col-sm-4 my-big-head" >Duration</th>
                        <td> <input type="text" className="form-control" onChange={(e)=>setduration(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <td >
                            <button className="btn btn-success" onClick={addSchedule} >Add</button>
                        </td>
                        <td>
                            <button className="btn btn-warning" onClick={goBack} >Cancel</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default StudentSchedule