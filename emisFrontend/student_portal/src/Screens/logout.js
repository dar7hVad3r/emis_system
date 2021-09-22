import { useDispatch } from "react-redux";
import { setId, clearId } from "../actions/studentActions";

const Logout = () => {
    const dispatch = useDispatch()
    dispatch(clearId())
    window.location.href = 'http://localhost:3004'
    return (
        <div>
            <p className='title'>Logout</p>
        </div>
    );
}

export default Logout