import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearId } from "../actions/facultyActions";
import { loginPage } from "../common/constants";

const Logout = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(clearId())
        window.location.href=loginPage
    },[])
    return (
        <div className='home__heading'>
                Logout
            </div>
    );
}

export default Logout