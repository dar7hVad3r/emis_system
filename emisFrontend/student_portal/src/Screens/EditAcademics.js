import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { AcademicURL, diplomaMapping, enggMapping, tenthMapping, twelfthMapping } from "../common/constants";

const EditAcademics = () => {
  const location = useLocation();
  const [selectedInput, setSelectedInput] = useState("tenth");
  const user = useSelector((state) => state.user);
  const history = useHistory()
  const handleChange = (e) => {
    setSelectedInput(e.target.value);
  };

  useEffect(()=>{
    location.state.tenth.sid=user
    location.state.twelfth.sid=user
    location.state.diploma.sid=user
    location.state.engg.sid=user
  })

  const handleInstituteInputChange = (e) => {
    if ( selectedInput === 'tenth' ) { location.state.tenth.school = e.target.value }
    if ( selectedInput === 'twelfth' ) { location.state.twelfth.school = e.target.value }
    if ( selectedInput === 'diploma' ) { location.state.diploma.institute = e.target.value }
    if ( selectedInput === 'engg' ) { location.state.engg.institute = e.target.value }
  }

  const handleUniversityInputChange = (e) => {
    if ( selectedInput === 'tenth' ) { location.state.tenth.board = e.target.value }
    if ( selectedInput === 'twelfth' ) { location.state.twelfth.board = e.target.value }
    if ( selectedInput === 'diploma' ) { location.state.diploma.university = e.target.value }
    if ( selectedInput === 'engg' ) { location.state.engg.university = e.target.value }
  }

  const handleMarksInputChange = (e) => {
    if ( selectedInput === 'tenth' ) { location.state.tenth.marks = e.target.value }
    if ( selectedInput === 'twelfth' ) { location.state.twelfth.marks = e.target.value }
    if ( selectedInput === 'diploma' ) { location.state.diploma.marks = e.target.value }
    if ( selectedInput === 'engg' ) { location.state.engg.marks = e.target.value }
  }

  const handlePDateInputChange = (e) => {
    if ( selectedInput === 'tenth' ) { location.state.tenth.passingYear = e.target.value }
    if ( selectedInput === 'twelfth' ) { location.state.twelfth.passingYear = e.target.value }
    if ( selectedInput === 'diploma' ) { location.state.diploma.passingYear = e.target.value }
    if ( selectedInput === 'engg' ) { location.state.engg.passingYear = e.target.value }
  }

  const saveDetails = () => {
    if ( selectedInput === 'tenth' ) { uploadTenthDetails(location.state.tenth) }
    if ( selectedInput === 'twelfth' ) { uploadTwelfthDetails(location.state.twelfth) }
    if ( selectedInput === 'diploma' ) { uploadDiplomaDetails(location.state.diploma) }
    if ( selectedInput === 'engg' ) { uploadEnggDetails(location.state.engg) }
  }

  const uploadTenthDetails = (details) => {
    axios.post(AcademicURL+tenthMapping, details).then((response)=>{
      const result = response.data
      if (result.status === 'success')
        alert('Upload Successful')
    })
  }

  const uploadTwelfthDetails = (details) => {
    axios.post(AcademicURL+twelfthMapping, details).then((response)=>{
      const result = response.data
      if (result.status === 'success')
        alert('Upload Successful')
    })
  }

  const uploadDiplomaDetails = (details) => {
    axios.post(AcademicURL+diplomaMapping, details).then((response)=>{
      const result = response.data
      if (result.status === 'success')
        alert('Upload Successful')
    })
  }

  const uploadEnggDetails = (details) => {
    axios.post(AcademicURL+enggMapping, details).then((response)=>{
      const result = response.data
      if (result.status === 'success')
        alert('Upload Successful')
    })
  }

  const goBack = () => {
    history.push('/academicinfo')
  }

  return (
    <div className="container">
      <p className="title">Edit Academic Information</p>
      <h4>Select Academics</h4>
      <select onChange={handleChange} className="form-select">
        <option value="tenth">Tenth</option>
        <option value="twelfth">Twelfth</option>
        <option value="diploma">Diploma</option>
        <option value="engg">Engineering</option>
      </select>
      <br />
      <h5>Institute Name </h5>
      <input className="form-control" type="text" onChange={handleInstituteInputChange} />
      <br />
      <h5>Enter Board/University Name</h5>
      <input className="form-control" type="text" onChange={handleUniversityInputChange} />
      <br />
      <h5>Enter Marks</h5>
      <input className="form-control" type="text" onChange={handleMarksInputChange} />
      <br />
      <h5>Select Passing Year</h5>
      <input className="form-control" type="date" onChange={handlePDateInputChange} />
      <br /><br />
      <button className="btn btn-success" onClick={saveDetails} >Save</button>
      <button className="btn btn-warning" onClick={goBack} >Cancel</button>
    </div>
  );
};

export default EditAcademics;
