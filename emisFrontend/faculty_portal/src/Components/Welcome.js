import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import { facURL } from "../common/constants"
import { setId } from "../actions/facultyActions"

const Welcome = () => {
    const param = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.user)
    if ( user <= 0){
        const createId = () => {
            dispatch(setId(param.id))
        }
        createId()
    }    
    history.push('/profile')
    return (
        <div></div>
    )
}

export default Welcome