import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearId } from "../actions/facultyActions";
import { loginURL } from "../common/constants";

const Logout = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(clearId())
        window.location.href = loginURL
    })
    return (
        <div className='title'>
            Logout
        </div>
    );
}

export default Logout