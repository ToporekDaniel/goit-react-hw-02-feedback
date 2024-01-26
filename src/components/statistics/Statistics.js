export const Statistics = props => {
  return (
    <div>
      Good: {props.good}, Neutral: {props.neutral}, Bad: {props.bad}, Total:
      {props.total}
      Positive Feedback:
      {props.positivePercentage}%
    </div>
  );
};
