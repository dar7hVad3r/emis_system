import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { facURL } from "../common/constants";

const FacultyRow = ({ faculty }) => {
  const history = useHistory();
  const handleEdit = () => {
    history.push("/editfaculty", faculty);
  };
  const addModule = () => {
    history.push('/addmodule', faculty)
  }
  const addSchedule = () => {
    history.push('/addschedule', faculty)
  }
  const handleDelete = () => {
    axios.delete(facURL + faculty.fid).then((response) => {
      if (response.data.status === "success") {
        alert("faculty deleted successfully");
        history.push("/deletehandler", 1);
      }
    });
  };
  return (
    <tr>
      <td>{faculty.fid}</td>
      <td>{faculty.name}</td>
      <td className="col-md-2">
        <button onClick={addModule} className="btn btn-outline-dark">Add</button>
      </td>
      <td className="col-md-2">
        <button onClick={addSchedule} className="btn btn-outline-dark">Add</button>
      </td>
      <td>
        <img
          src="../images/edit.png"
          alt="edit"
          onClick={handleEdit}
          className="buttons"
        />
      </td>
      <td>
        <img
          src="https://www.pngrepo.com/png/79440/180/delete-button.png"
          alt="delete"
          onClick={handleDelete}
          className="buttons"
        />
      </td>
    </tr>
  );
};

export default FacultyRow;
