import React, { useEffect, useState } from 'react'
import '../css/Faculty.css'
import axios from 'axios'
import { url } from '../components/constants'
import FacultyRow from '../components/FacultyRow'
import { Link } from 'react-router-dom'
import { facModuleURL, facScheduleURL } from '../common/constants'



const Faculty = ( ) => {
    const [faculty, setfaculty] = useState([])
    const [moduleWarningFlag,setModuleWarningFlag] = useState(0)
    useEffect(()=>{
        getFaculty();
    },[])

    const getFaculty = () =>{
        axios.get(url + 'faculty').then((response)=>{
            setfaculty(response.data)
        })
    }
    const clearModules = () => {
        axios.delete(facModuleURL).then(response=>{
            const result = response.data
            if ( result.status === 'success' )
                alert('All Modules Cleared')
        })
    }
    const clearSchedules = () => {
        axios.delete(facScheduleURL).then(response=>{
            const result = response.data
            if ( result.status === 'success' )
                alert( 'All Schedules Cleared' )
        })
    }
    return (
        <div>
            <p className="title" >Faculty</p>
            <div> 
                <Link to='/addfaculty'><button className="btn btn-success my-button ">ADD Faculty</button></Link> 
                <button onClick={clearModules} title="Warning!!! this will clear modules of all faculties" className="btn btn-danger my-button ">Clear Modules</button>
                <button onClick={clearSchedules} title="Warning!!! this will clear schedules of all faculties" className="btn btn-danger my-button ">Clear Schedules</button>
                <h3>Faculty List</h3>
            </div>
            <div> <br /> </div>
            <table className="table table-bordered table-success table-striped">
                <thead>
                    <tr>
                    <th>FID</th>
                    <th>Name</th>
                    <th className="col-md-2" >Module</th>
                    <th className="col-md-2" >Schedule</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {faculty.map((person)=>{return <FacultyRow faculty = {person} />})}
                </tbody>
            </table>
        </div>
    )
}

export default Faculty