import { FBtn } from 'components/button/button';

export const FeedbackOptions = props => {
  return (
    <div>
      {props.options.map(option => (
        <FBtn
          key={option}
          btnName={option}
          onClick={() => props.onLeaveFeedback(option)}
        />
      ))}
    </div>
  );
};
