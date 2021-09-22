import './Login.css'
import { useState } from 'react'
import axios from 'axios'
import { AdmURL, FacURL, StudURL, welcome, welcomeAdmin, welcomeFac } from './common/constants'

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const LoginUSer = () => {
        let cred = {
            "email":email,
            "password":password
        }
        axios.post('http://localhost:8080/login', cred).then((response)=>{
            if ( response.data.status === 'success' ){
                if (response.data.data.roll === 'student'){
                    console.log('hello')
                    window.location.href = StudURL + welcome + response.data.data.sid
                } if ( response.data.data.roll === 'admin'){
                    console.log('hello')
                    window.location.href = AdmURL + welcomeAdmin + response.data.data.fid

                } if ( response.data.data.roll === 'faculty' ){
                    console.log('hello')
                    window.location.href = FacURL + welcomeFac + response.data.data.fid

                }
            }
        })

        // window.location.href = StudURL ;
        // if (info.roll === 'student'){
        //     window.location.href = StudURL ;
        //     console.log(info.roll)
        // }
    }

    return (
        <div className="container" >
            <h1>
                EMIS Login
            </h1>

            <table>
                <tr>
                    <td width="60%">
                        <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kku8fuqJcv6a-qozkf-ohwwKnemNbndERquaP3kp4aQf6XlKdeKf9KT2fXTA4vB1NyM&usqp=CAU"></a>
                        {/* <img src="" width="50" height="60"></img> */}
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kku8fuqJcv6a-qozkf-ohwwKnemNbndERquaP3kp4aQf6XlKdeKf9KT2fXTA4vB1NyM&usqp=CAU" alt="Logo image" />
                    </td>
                    <td>
                        <tr>
                            <td width="20%">
                                    Email
                            </td>
                            <td><input type="email" className="form-control" placeholder="Email" size="50" onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            /> </td>
                        </tr>
                        <br>
                        </br>
                        <tr>
                            <td>
                                Password
                            </td>
                            <td>
                                <input type="password" className="form-control" placeholder="Password" size="50" onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                />
                            </td>
                        </tr>
                        <br>
                        </br>
                        <tr>
                            <td colSpan="2"> <button className="btn" onClick={LoginUSer} className="btn btn-success" > Login </button> </td>
                        </tr>
                    </td>
                </tr>
            </table>
        </div>


    )
}

export default Login