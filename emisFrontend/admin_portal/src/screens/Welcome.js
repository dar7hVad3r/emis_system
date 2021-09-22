import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import { setId } from "../actions/facultyActions"

const Welcome = () =>{

    const dispatch = useDispatch()
    const param = useParams()
    const history = useHistory()
    const user = useSelector(state => state.user)
    if ( user <= 0){
        const createId = () =>{
            dispatch(setId(param.id))
        }
        createId()
    }
    history.push('/home')
    return (
        <div></div>
    );
}

export default Welcome