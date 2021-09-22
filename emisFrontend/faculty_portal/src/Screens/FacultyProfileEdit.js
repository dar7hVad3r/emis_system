import { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'
import { facURL } from '../common/constants'

const FacultyProfileEdit = () => {
    const location = useLocation()
    const history = useHistory()
    const updateFac = () => {
        axios.post(facURL, location.state).then((response)=>{
            const result = response.data
            if ( result.status === 'success'){
                history.push('/profile')
            }
        })
    }
    return (
        <div>
            <div className='title'>
                Edit {location.state.name}'s Profile
            </div>
            <table className="table table-bordered table-success table-striped">
                <tbody>
                    <tr>
                        <td>
                            <label>
                                Name :
                            </label>
                        </td>
                        <td>
                            <input className="form-control" type="text" placeholder={location.state.name} onChange={(e) => {location.state.name=e.target.value}} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Designation :
                            </label>
                        </td>
                        <td>
                            <input className="form-control" type="text" placeholder={location.state.designation} onChange={(e) => {location.state.designation=e.target.value}} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Email :
                            </label>
                        </td>
                        <td>
                            <input className="form-control" type="text" placeholder={location.state.email} onChange={(e) => {location.state.email = e.target.value}} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Phone :
                            </label>
                        </td>
                        <td>
                            <input className="form-control" type="text" placeholder={location.state.phone} onChange={(e)=>{location.state.phone=e.target.value}} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Password :
                            </label>
                        </td>
                        <td>
                            <input className="form-control" type="password" placeholder="Change Password" onChange={(e)=>{location.state.password=e.target.value}} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Area :
                            </label>
                        </td>
                        <td>
                            <input className="form-control" type="textarea" placeholder={location.state.area} onChange={(e)=>{location.state.area=e.target.value}} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                City :
                            </label>
                        </td>
                        <td>
                            <input className="form-control" type="text" placeholder={location.state.city} onChange={(e)=>{location.state.city=e.target.value}} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                State :
                            </label>
                        </td>
                        <td>
                            <input className="form-control" type="text" placeholder={location.state.state} onChange={(e)=>{location.state.state=e.target.value}} />
                        </td>
                    </tr>
                    <tr>
                        <td> <button className='btn btn-success' onClick={updateFac} >Save</button> </td>
                        <td> <Link to='/profile'><button className='btn btn-warning'>Cancel</button></Link> </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
export default FacultyProfileEdit