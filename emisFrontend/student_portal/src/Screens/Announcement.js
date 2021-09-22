import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setId } from "../actions/studentActions";
import { announcementURL } from "../common/constants";

const Announcement = () => {
    const param = useParams()
    const [announcement, setAnnouncement] = useState("No Announcement Yet")
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    if (user <= 0) {
        const createId = () => {
            dispatch(setId(param.id))
        }
        createId()
    }

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