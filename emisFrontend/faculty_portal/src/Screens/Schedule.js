import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { schedURL } from "../common/constants";
import ScheduleRow from "../Components/ScheduleRow";

const Schedule = () => {
    
    const [schedule, setSchedule] = useState([])
    const user = useSelector(state => state.user)

    useEffect(() => {
        getSchedule()
    }, [])

    const getSchedule = () => {
        axios.get(schedURL+user).then((response)=>{
            const result = response.data
            if ( result.status === 'success'){
                setSchedule(result.data)
            } else {
                alert('error loading schedule')
            }
        })
    }
    return (
        <div>
        <div className='title'>
            Schedule
        </div>
        <br />
        <table className="table table-bordered table-success table-striped">
            <thead class="thead-dark"></thead>
            <thead>
                <tr>
                    <th >From</th>
                    <th >To</th>
                    <th >Module</th>
                    <th >Batch</th>
                    <th >Starts</th>
                    <th >Ends</th>
                    <th >Duration</th>
                </tr>
            </thead>
            <tbody>
                {
                    schedule.map((sh)=>{
                        return <ScheduleRow schedule={sh}/>
                    })
                }
            </tbody>
        </table>
        </div>
    );
}
export default Schedule