import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import '../css/addedit.css'


const EditAdmin
 = () => {
    // const []
    return (
        <div>
            <p className='title'>Edit Admin</p>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <td>
                            <label>
                                 ID :
                            </label>
                        </td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                               Name:
                            </label>
                        </td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              Email:
                            </label>
                        </td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              Phone:
                            </label>
                        </td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              Designation:
                            </label>
                        </td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                               Area:
                            </label>
                        </td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                               City:
                            </label>
                        </td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                               State:
                            </label>
                        </td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                               pin:
                            </label>
                        </td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    
                    <tr>
                        <td> <button className='btn btn-success'>Save</button> </td>
                        <td> <Link to='/home'><button className='btn btn-warning'>Cancel</button></Link> </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
export default EditAdmin