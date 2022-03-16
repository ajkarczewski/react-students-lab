import Student from "./Student";

function StudentList (props) {
  return (
    <>
    {props.students.map(student => <Student key={student.name} student={student}/>)}
    </>
  )
}

export default StudentList;