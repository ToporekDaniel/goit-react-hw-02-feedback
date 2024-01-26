import styled from 'styled-components';

const StatList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const Statistics = props => {
  return (
    <StatList>
      <li>Good: {props.good}</li>
      <li>Neutral: {props.neutral}</li>
      <li>Bad: {props.bad}</li>
      <li>Total: {props.total}</li>
      <li>Positive Feedback: {props.positivePercentage}%</li>
    </StatList>
  );
};
