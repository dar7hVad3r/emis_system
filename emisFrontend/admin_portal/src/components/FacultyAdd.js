import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import '../css/addedit.css'
import { facURL } from '../common/constants'


const FacultyAdd
 = () => {
    const history = useHistory();
    const [fid, setfid] = useState(0)
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [designation, setdesignation] = useState('')
    const [area, setarea] = useState('')
    const [city, setcity] = useState('')
    const [state, setstate] = useState('')
    const [pin, setpin] = useState('')
    const [password, setpassword] = useState('')
    const [roll, setroll] = useState("faculty")
    
    const addfaculty = () => {
        const newFac = {
            'fid':fid,
            'name':name,
            'email':email,
            'phone':phone,
            'designation':designation,
            'area':area,
            'city':city,
            'state':state,
            'pin':pin,
            'password':password,
            'roll':roll
        }
        axios.post(facURL, newFac).then((response)=>{
            if ( response.data.status === 'success'){
                alert('faculty added successfully')
                history.push('/faculty')
            }
        })
    }

    return (
        <div>
            <p className='title'>Add Faculty</p>
            <table className="table table-bordered table-success table-striped">

                <tbody>
                    <tr>
                    </tr>
                    <tr>
                        <td>
                            <label>
                               Name
                            </label>
                        </td>
                        <td>
                            <input className="form-control" type="text" onChange={(e)=>setname(e.target.value)} />
                        </td>
                        <td>
                            <label>
                               Email
                            </label>
                        </td>
                        <td>
                            <input className="form-control" type="text" onChange={(e)=>setemail(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                               Phone
                            </label>
                        </td>
                        <td>
                            <input className="form-control" type="text" onChange={(e)=>setphone(e.target.value)} />
                        </td>
                        <td>
                            <label>
                               Password
                            </label>
                        </td>
                        <td>
                            <input className="form-control" type="password" onChange={(e)=>setpassword(e.target.value)} />
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            <label>
                               Area
                            </label>
                        </td>
                        <td>
                            <input className="form-control" type="text" onChange={(e)=>setarea(e.target.value)} />
                        </td>
                        <td>
                            <label>
                               City
                            </label>
                        </td>
                        <td>
                            <input className="form-control" type="text" onChange={(e)=>setcity(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                               State
                            </label>
                        </td>
                        <td>
                            <input className="form-control" type="text" onChange={(e)=>setstate(e.target.value)} />
                        </td>
                        <td>
                            <label>
                               Pin
                            </label>
                        </td>
                        <td>
                            <input className="form-control" type="text" onChange={(e)=>setpin(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <label>
                               Designation
                            </label>
                        </td>
                        <td >
                            <input className="form-control" type="text" onChange={(e)=>setdesignation(e.target.value)} />
                        </td>
                    <td>
                            <label>
                               Roll
                            </label>
                        </td>
                        <td >
                            <input className="form-control" type="text" onChange={(e)=>setroll(e.target.value)} />
                        </td>
                        
                    </tr>
                    <tr>
                        <td> <button className='btn btn-success' onClick={addfaculty} >Save</button> </td>
                        <td colSpan='3' > <Link to='/faculty'><button className='btn btn-warning'>Cancel</button></Link> </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
export default FacultyAdd