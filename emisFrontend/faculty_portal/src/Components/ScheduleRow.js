const ScheduleRow = ({schedule}) => {
    return(
        <tr>
            <th>{schedule.sdate}</th>
            <th>{schedule.edate}</th>
            <th>{schedule.module}</th>
            <th>{schedule.batch}</th>
            <th>{schedule.starts}</th>
            <th>{schedule.ends}</th>
            <th>{schedule.duration}</th>
        </tr>
    )
}

export default ScheduleRow