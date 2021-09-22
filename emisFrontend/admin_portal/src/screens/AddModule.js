import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import { facModuleURL } from "../common/constants"


const AddModule = () => {
    const location = useLocation()
    const user = useSelector((state)=>state.user)
    const [moduleName, setModuleName] = useState('')
    const [modDuration, setDuration] = useState(0)

    const saveModule = () => {
        const data = {
            id:0,
            fid:location.state.fid,
            name:moduleName,
            duration:modDuration,
            completion:0,
            status:'partially'
        }
        axios.post(facModuleURL+location.state.fid, data).then((response)=>{
            if ( response.data.status === 'success' ){
                alert("Module "+moduleName+" added")
            }
        })
    }

    return (
        <div>
            <p className="title">Add module for {location.state.name} </p>
            <table className="table table-success table-striped table-bordered">
                <tbody>
                    <tr>
                        <th class="col-sm-4 my-big-head" >Enter Module Name</th>
                        <td> <input type="text" className="form-control" onChange={(e)=>setModuleName(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <th class="col-sm-4 my-big-head" >Enter Module Duration</th>
                        <td> <input type="text" className="form-control" onChange={(e)=>setDuration(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <td> <button onClick={saveModule} className="btn btn-success">Save</button> </td>
                        <td> <Link to='/faculty' ><button className="btn btn-warning">Cancel</button></Link> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AddModule