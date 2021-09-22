import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import StudentRow from '../components/StudentRow'
import { url } from '../components/constants'
import '../css/StudentInfo.css'
const StudentInfo = () => {
  const [studentinfo, setStudentInfo] = useState([])

  useEffect(() => {
    console.log(`StudentInfo component got loaded`)
    getStudentInfo()
  }, [])

  const getStudentInfo = () => {
    axios.get(url + '/students').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setStudentInfo(result.data)
      } else {
        alert('error while loading list of student')
      }
    })
  }

  return (
    <div>
      <div className="my-button">
                <Link to='/addstudent'><button className="btn btn-success"> Add </button></Link>
            </div>
      <table className='table table-striped'>
        <thead >
          <tr>
            <th>Sid</th>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {studentinfo.map((student) => {
            return <StudentRow student={student} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default StudentInfo
