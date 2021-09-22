import axios from "axios"
import { useEffect, useState } from "react"
import { announcementURL } from "../common/constants"

const Announcement = () => {
    const [announcement, setAnnouncement] = useState("No Announcement Yet")

    useEffect(() => {
        getAnnouncement()
    }, [])
    const getAnnouncement = () => {
        axios.get(announcementURL).then((response) => {
            const result = response.data
            setAnnouncement(result.data.content)
        })
        console.log(announcement)
    }
    return (
        <div className="container" >
            <p className='title'>Announcement</p>
            <div class="card">
                <div class="card-body">
                   <p className="annoucement">{announcement}</p>
                </div>
            </div>
        </div>
    );
}

export default Announcement