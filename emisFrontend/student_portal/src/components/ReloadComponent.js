import { useHistory } from "react-router"

const ReloadComponent = () => {
    const history = useHistory()
    history.push('/upload')
    return (
        <div/>
    )
}

export default ReloadComponent