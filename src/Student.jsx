import Score from "./Score";

// Fixed formatting and added missing a key prop on <Score/>

// The main purpose of keys is to help React differentiate and 
// distinguish elements from each other, increasing its performance 
// when diffing between the virtual and real DOM. 

const Student = (props) => {
  return (
    <>
      <h3>Name: {props.student.name}</h3>
      <h3>Bio: {props.student.bio}</h3>

      {props.student.scores.map((score, idx) =>
        <Score key={idx} name={props.student.name} score={score} />
      )}
      
    </>
  );
}

export default Student;