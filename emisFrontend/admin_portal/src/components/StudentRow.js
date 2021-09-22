import { url } from '../components/constants'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import { studURL } from '../common/constants'

const StudentRow = ({ student}) => {
  const history = useHistory()

  const handleEdit = () => {
    history.push({
      pathname:"/editstudent",
      state:student,
    })
  }
  const handleDelete = () => {
    axios.delete(studURL + student.sid).then((response) => {
      if ( response.data.status === 'success'){
        history.push('/deletehandler', 2)
      }
    })
  }

  return (
    <tr>
      <td>{student.sid}</td>
      <td>{student.name}</td>
      <td>
      <img src='../images/edit.png' alt="edit" className="buttons" onClick={handleEdit} />

      </td>
      <td>
      <img src="https://www.pngrepo.com/png/79440/180/delete-button.png" alt="delte" className="buttons" onClick={handleDelete} /> 

      </td>
        
    </tr>
  )
}

export default StudentRow 
