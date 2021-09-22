const ScheduleRow = ({schedule}) => {
    return(
        <tr>
            <td>{schedule.sdate}</td>
            <td>{schedule.edate}</td>
            <td>{schedule.module}</td>
            <td>{schedule.starts}</td>
            <td>{schedule.ends}</td>
            <td>{schedule.duration}</td>
        </tr>
    )
}
export default ScheduleRow