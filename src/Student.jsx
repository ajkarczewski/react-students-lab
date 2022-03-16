import Score from "./Score";

const Student = (props) => {
  return (
    <>
      <h3>Name: {props.student.name}
        <br></br>
        Bio: {props.student.bio}</h3>
      {props.student.scores.map(score => <Score name={props.student.name} score={score}/>)}
    </>
  );
}

export default Student;