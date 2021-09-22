import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import '../css/addedit.css'
import {studURL} from '../common/constants'


const StudentAdd = () => {
    const history = useHistory()
    const [id, setId] = useState(0)
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [password, setpassword] = useState('')
    const [area, setarea] = useState('')
    const [city, setcity] = useState('')
    const [state, setstate] = useState('')
    const [pin, setpin] = useState('')

    const goBack = () => {
        history.push('/student')
    }

    const saveStudent = () => {
        const details = {
            'id' : id,
            'name' : name,
            'email' : email,
            'phone' : phone,
            'password' : password,
            'area' : area,
            'city' : city,
            'state' : state,
            'pin' : pin,
            'roll': 'student'
        }
        axios.post(studURL, details).then((response)=>{
            const result = response.data
            if ( result.status === 'success' )
                history.push('/student')
            else
                alert('adding student failed')
        })
    }

    return (
        <div>
            <p className='title'>Add Student</p>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <td>
                            <label>
                               Name:
                            </label>
                        </td>
                        <td>
                        <inputt className="form-control"type="text" onChange={(e) => setname(e.target.value)} />
                        </td>
                        <td>
                            <label>
                               Email:
                            </label>
                        </td>
                        <td>
                            <inputt className="form-control"type="text" onChange={(e) => setemail(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                               Phone:
                            </label>
                        </td>
                        <td>
                        <inputt className="form-control"type="text" onChange={(e) => setphone(e.target.value)} />
                        </td>
                        <td>
                            <label>
                               Password:
                            </label>
                        </td>
                        <td>
                        <input className="form-control"type="text" onChange={(e) => setpassword(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                               Area:
                            </label>
                        </td>
                        <td>
                        <input className="form-control" type="text" onChange={(e) => setarea(e.target.value)} />
                        </td>
                        <td>
                            <label>
                               City:
                            </label>
                        </td>
                        <td>
                        <inputt className="form-control"type="text" onChange={(e) => setcity(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                               State:
                            </label>
                        </td>
                        <td>
                        <inputt className="form-control"type="text" onChange={(e) => setstate(e.target.value)} />
                        </td>
                        <td>
                            <label>
                               Pin:
                            </label>
                        </td>
                        <td>
                        <inputt className="form-control"type="text" onChange={(e) => setpin(e.target.value)} />
                        </td>
                    </tr>
                    
                    <tr>
                        <td colSpan='1'> <button className='btn btn-success' onClick={saveStudent} >Save</button> </td>
                        <td colSpan='3'> <Link to='/student'><button className='btn btn-warning' onClick={goBack}>Cancel</button></Link> </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
export default StudentAdd