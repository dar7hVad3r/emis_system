import { useHistory, useLocation } from "react-router"

const DeleteRedirector = () => {

    const history = useHistory()
    const location = useLocation()
    if ( location.state == 1 )
        history.push('/faculty')
    if ( location.state == 2 )
        history.push('/student')

    return (
        <div/>
    );
}

export default DeleteRedirector