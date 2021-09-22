import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { announcementURL } from "../common/constants";

const Announcement = () => {
  const [announcement, setAnnouncement] = useState("");
  const history = useHistory()
  const postAnnouncement = () => {
    const ann = {
      id:0,
      content:announcement
    }
    axios.post(announcementURL, ann).then((response)=> {
      const result = response.data
      if (result.status === 'success'){
        alert("Announcement added!")
      }
    })
  }
  const goBack = () => {
    history.push('/home')
  }
  return (
    <div className="container my-announcement">
      <p className="title">Add Announcement</p>
      <h2>Post announcement here</h2>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="10"
        onChange={(e)=>setAnnouncement(e.target.value)}
      ></textarea>
      <button className="btn btn-success" onClick={postAnnouncement} >Post</button>
      <button className="btn btn-warning" onClick={goBack} >Cancel</button>
    </div>
  );
};

export default Announcement;
