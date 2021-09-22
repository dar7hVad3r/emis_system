import React, { useEffect, useState } from 'react'
import '../css/Home.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import { adminURL } from '../common/constants';
import { useSelector } from 'react-redux';

function Home() {
    const [info, setInfo] = useState({})
    const user = useSelector(state => state.user)
    // const [flag, setflag] = useState(0)
    useEffect(() => {
        getuser()
    }, [])
    
      // console.log(message)
    const getuser = () => {      
        if ( info != null ){
        axios.get(adminURL + user).then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setInfo(result.data)
          } else {
            alert('error while loading list of student')
          }
        })
      }
    }

    return (
        <div>
            <div className='title'>
                Admin Profile
            </div>
            <div className="my-button">
                <Link to='/announcement'>
                    <button className='btn btn-success'>Add Announcement</button>
                </Link>
            </div>
            <br/>
            <table className="table table-bordered table-success table-striped">
                <tbody>
                    <tr>
                        <td>
                            <label>
                                 Id :
                            </label>
                        </td>
                        <td>
                            {info.fid}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Name :
                            </label>
                        </td>
                        <td>
                        {info.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Email :
                            </label>
                        </td>
                        <td>
                          {info.email}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Phone :
                            </label>
                        </td>
                        <td>
                           {info.phone}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                            Roll
                            </label>
                        </td>
                        <td>
                        {info.designation}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Area :
                            </label>
                        </td>
                        <td>
                        {info.area}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                City :
                            </label>
                        </td>
                        <td>
                        {info.city}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                State :
                            </label>
                        </td>
                        <td>
                        {info.state}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Pincode :
                            </label>
                        </td>
                        <td>
                        {info.pin}
                        </td>
                    </tr>
                    
                </tbody>
            </table>

        </div>
    );
}

export default Home