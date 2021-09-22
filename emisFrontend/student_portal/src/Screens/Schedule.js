import axios from "axios";
import { useEffect, useState } from "react";
import ScheduleRow from "../components/ScheduleRow";
import { scheduleURl } from './../common/constants';

const Schedule = () => {
    const [schedule, setSchedule] = useState([])
    useEffect(() => {
        getSchedule()
    }, [])

    const getSchedule = () => {
        axios.get(scheduleURl).then((response) => {
            const result = response.data
            setSchedule(result.data)
        })
    }
    return (
        <div>
            <p className='title'>Schedule</p>
            <table className="table table-striped table-success table-bordered">
                <thead>
                    <tr>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Module</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        schedule.map((sh)=>{
                            return <ScheduleRow schedule = {sh}/>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Schedule