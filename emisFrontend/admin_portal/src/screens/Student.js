import React, { useEffect, useState } from 'react'
import '../css/Student.css'
import StudentInfo from '../components/StudentInfo'
import axios from 'axios'
import { url } from '../components/constants'
import StudentRow from '../components/StudentRow'
import { Link, useHistory } from 'react-router-dom'
import { studURL } from '../common/constants'

function Student() {
    const [students, setstudents] = useState([])
    const history = useHistory()
    useEffect(()=>{
        console.log("helllllo")
        getStudents()
    }, [])

    const getStudents = () => {
        axios.get(studURL).then((response)=>{
            setstudents(response.data)
        })
    }

    const addSchedule = () => {
        history.push('/studentschedule')
    }
    
    return (
        <div> 
            <p className="title" >Students</p>
            <div> 
                <Link to='/addstudent'><button className="btn btn-success my-button">ADD</button></Link> 
                <button className="btn btn-success my-button" onClick={addSchedule} >Add Schedule</button>
                <h3>Student List</h3>
            </div>
            <table className="table table-bordered table-success table-striped">
               <thead>
                   <tr>
                       <th>SID</th>
                       <th>Name</th>
                       <th>Edit</th>
                       <th>Delete</th>
                   </tr>
               </thead>
               <tbody>
                   {students.map((student) => {
                       return <StudentRow student={student}/>
                   })}
               </tbody>
            </table>
            
        </div>
    )
}

export default Student
