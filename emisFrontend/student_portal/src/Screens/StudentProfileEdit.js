import { useState } from 'react'
import { useHistory, Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { URL } from '../common/constants'


const StudentProfileEdit = () => {
    const location = useLocation()
    const history = useHistory()
    const save = () => {
        saveDetails()
    }

    const saveDetails = () => {
        axios.post(URL, location.state).then((response)=>{
            history.push('/profile')
        })
    }

    return (
        <div>
            <p className='title'>Edit {location.state.name}'s Information</p>
            <Link to='/upload'><button className='btn btn-success my-button'>Upload Photo</button></Link>
            <table className="table table-bordered table-success table-striped">
                <tbody>
                    <tr>
                        <th>
                            <label>
                                Name 
                            </label>
                        </th>
                        <td>
                            <input placeholder={location.state.name} type="text" className='form-control' onChange={(e)=>{location.state.name = e.target.value}} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                Email 
                            </label>
                        </th>
                        <td>
                            <input placeholder={location.state.email} type="text" className='form-control' onChange={(e)=>{location.state.email = e.target.value}} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                Phone 
                            </label>
                        </th>
                        <td>
                            <input placeholder={location.state.phone} type="text" className='form-control' onChange={(e)=>{location.state.phone = e.target.value}} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                Area 
                            </label>
                        </th>
                        <td>
                            <input placeholder={location.state.area} type="text" className='form-control' onChange={(e)=>{location.state.area = e.target.value}} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                City
                            </label>
                        </th>
                        <td>
                            <input placeholder={location.state.city} type="text" className='form-control' onChange={(e)=>{location.state.city = e.target.value}} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                State
                            </label>
                        </th>
                        <td>
                            <input placeholder={location.state.state} type="text" className='form-control' onChange={(e)=>{location.state.state = e.target.value}} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                Pin
                            </label>
                        </th>
                        <td>
                            <input placeholder={location.state.pin} type="text" className='form-control' onChange={(e)=>{location.state.pin = e.target.value}} />
                        </td>
                    </tr>
                    <tr>
                        <td> <button className='btn btn-success' onClick={save} >Save</button> </td>
                        <td> <Link to='/profile'><button className='btn btn-warning'>Cancel</button></Link> </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
export default StudentProfileEdit