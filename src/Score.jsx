const Score = (props) => {
  return (
    <>
    <h4>date: {props.score.date}
    <br></br> 
    score: {props.score.score}%</h4>
    </>
  );
}

export default Score;