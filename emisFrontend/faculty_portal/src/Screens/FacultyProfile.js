import '../css/FacultyProfile.css'
import { useState, useEffect } from 'react'
import {Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { facURL } from '../common/constants'

const FacultyProfile = () => {
    const [faculty, setFaculty] = useState({})
    const user = useSelector(state => state.user)
    const history = useHistory()
    useEffect(()=>{
        getUser()
    }, [])

    const getUser = () => {
            axios.get(facURL+user).then((response)=>{
                const result = response.data
                if ( result.status === 'success' ){
                    setFaculty(result.data)
                } else {
                    alert( 'error while loading data of faculty' )
                }
            })
    }

    const edit = () => {
        history.push('/edit', faculty)
    }

    return (
        <div>
            <div className='title'>
                Faculty Profile
            </div>
            <div className="mybutton">
                <button className='btn btn-success' onClick={edit} >Edit</button>                
            </div>
            <br/>
            <table className="table table-bordered table-success table-striped">
            <tbody>
                    <tr>
                        <th>
                            <label>
                                 Id      
                            </label>
                        </th>
                        <td>
                            : {faculty.fid}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                Name 
                            </label>
                        </th>
                        <td>
                        : {faculty.name}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                Email 
                            </label>
                        </th>
                        <td>
                        : {faculty.email}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                Phone 
                            </label>
                        </th>
                        <td>
                           : {faculty.phone}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>
                            Designation
                            </label>
                        </th>
                        <td>
                        : {faculty.designation}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                Area 
                            </label>
                        </th>
                        <td>
                        : {faculty.area}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                City 
                            </label>
                        </th>
                        <td>
                        : {faculty.city}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                State 
                            </label>
                        </th>
                        <td>
                        : {faculty.state}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                Pincode 
                            </label>
                        </th>
                        <td>
                        : {faculty.pin}
                        </td>
                    </tr>
                    
                </tbody>
            </table>

        </div>
    );
}
export default FacultyProfile