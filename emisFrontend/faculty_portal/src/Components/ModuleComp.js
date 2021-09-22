import axios from "axios"
import { useState } from "react"
import { useSelector } from 'react-redux';
import { modURL } from "../common/constants";

const ModuleComp = ({ module }) => {
    const user = useSelector((state)=>state.user)
    const [completedHours, setCompletedHours] = useState(module.completion)
    
    const handleSliderChange = (e) => {
        setCompletedHours(e.target.value)
    }
    const saveCompletionStatus = () => {
        module.completion=completedHours
        module.fid=user
        if ( completedHours == module.duration ){
            module.status = 'Completed'
        } else {
            module.status = 'Partially'
        }
        axios.post(modURL + user, module).then((response)=>{
            const result = response.data
            if (result.status === 'success'){
                alert('Completions Status Changed Successfully')
            }
        })
    }
    return (
        <tr>
            <table className="table table-striped table-success table-bordered">
                <tbody>
                    <tr>
                        <td class="col-sm-4">Module Name</td>
                        <td colSpan="2">{module.name}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="col-sm-4">Module Duration</td>
                        <td colSpan="2">{module.duration}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="col-sm-4">Hours Completed</td>
                        <td>
                            <label for="customRange2" class="form-label">Completed Hours : {completedHours}</label>
                            <input type="range" class="form-range" defaultValue={module.completion} min="0" max={module.duration} id="customRange2" onChange={handleSliderChange} />
                            <td> <button className="btn btn-success" onClick={saveCompletionStatus} > Add </button> </td>
                        </td>
                    </tr>
                        <tr>
                            <td class="col-sm-4">Completion Status</td>
                            <td colSpan="2">{module.status}</td>
                            <td></td>
                        </tr>
                </tbody>
            </table>

        </tr>
            )
}

            export default ModuleComp