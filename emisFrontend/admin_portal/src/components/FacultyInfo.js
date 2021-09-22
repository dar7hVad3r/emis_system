import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../components/constants'
import '../css/FacultyInfo.css'
import FacultyRow from '../components/FacultyRow'


const FacultyInfo = () => {
  const [facultyinfo, setFacultyInfo] = useState([])

  useEffect(() => {
    console.log(`FacultyInfo component got loaded`)
    getFacultyInfo()
  }, [])

  const getFacultyInfo = () => {
    axios.get(url + '/faculty').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setFacultyInfo(result.data)
      } else {
        alert('error while loading list of student')
      }
    })
  }

  return (
    <div>
      <div className="my-button">
                <Link to='/addfaculty'><button className="btn btn-success"> Add </button></Link>
            </div>
  <div className='table__allign'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Fid</th>
            <th></th>
            <th>Name</th>
            <th></th>
            <th>Edit</th>
            <th></th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {facultyinfo.map((faculty) => {
            return <FacultyRow faculty={ faculty } />
          })}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default FacultyInfo
