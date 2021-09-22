const MarksRow = ({ subject }) => {
  return(
    <tr>
      <th>{subject.subject}</th>
      <td>{subject.theory}</td>
      <td>{subject.internal}</td>
      <td>{subject.lab}</td>
      <td>{subject.theory+subject.internal+subject.lab}</td>
      <td>{subject.outof}</td>
      <td>{(subject.theory+subject.internal+subject.lab) > 40 ? "Pass":"Fail"}</td>
    </tr>
  )
};

export default MarksRow