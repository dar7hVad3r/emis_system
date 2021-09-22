import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useHistory, useLocation } from "react-router"
import { Link } from "react-router-dom"
import { mediaURL, photoURL } from "../common/constants"

const UploadPhoto = () => {
    const [photo, setPhoto] = useState('')
    const [selectedPhoto, setSelectedPhoto] = useState(undefined)
    const user = useSelector((state)=>state.user)
    const history = useHistory()
    const location = useLocation()
    const onFileSelect = (e) => {
        setSelectedPhoto(e.target.files[0])
    }
    const upload = () => {
        const uploadData = new FormData()
        uploadData.append('photo',selectedPhoto)
        axios.post(mediaURL + user, uploadData).then((response)=>{
             const result = response.data
             if ( result.status === 'success'){
                 alert('Photo Uploaded')
             }
        })
        history.push('/reload')
    }
    const clear = () => {
        axios.delete(mediaURL+user).then((response)=>{
            if (response.data.status === 'success'){
                alert('Photo Deleted')
            }
        })
        history.push('/reload')
    }
    useEffect(()=>{
        axios.get(mediaURL+user).then((response)=>{
            const result = response.data
            if ( result.status === 'success' && result.data[0] != undefined ){
                setPhoto(result.data[0].photo)
                console.log(result.data[0].photo)
            } else {

            }
        })
    }, [])
    return <div>
        <p className="title" >Upload Photo</p>
        {
            photo === ''? <h3></h3> : <h3>Previously Uploaded Photo</h3>
        }
        <img className="rounded my-photo" src={photoURL+photo} alt="upload photo" />
        <br />
        <h3>Select File</h3>
        <input
          accept="image/*"
          onChange={onFileSelect}
          type="file"
          className="form-control"
        />
        <br />
        <button onClick={upload} className="btn btn-success">Upload</button>
        <button onClick={clear} className="btn btn-danger">Clear Previous</button>
        <Link to='/profile' ><button className="btn btn-warning">Cancel</button></Link>
    </div>
}

export default UploadPhoto