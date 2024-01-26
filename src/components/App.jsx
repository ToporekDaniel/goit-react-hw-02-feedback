import React, { useState } from 'react';
import { FBtn } from './button/button';

export const App = () => {
  const [feedback, setFeedback] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0,
  });

  const handleBtnClick = btnName => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [btnName]: prevFeedback[btnName] + 1,
    }));
  };

  const countTotalFeedback = feedback => {
    const total = feedback.Good + feedback.Neutral + feedback.Bad;
    return total;
  };

  const countPositiveFeedbackPercentage = (total, feedback) => {
    if (total === 0) {
      return 0;
    }

    const percentage = Math.round((feedback.Good / total) * 100);
    return percentage;
  };

  return (
    <>
      <FBtn btnName="Good" onClick={() => handleBtnClick('Good')} />
      <FBtn btnName="Neutral" onClick={() => handleBtnClick('Neutral')} />
      <FBtn btnName="Bad" onClick={() => handleBtnClick('Bad')} />
      <div>
        Good: {feedback.Good}, Neutral: {feedback.Neutral}, Bad: {feedback.Bad},
        Total: {countTotalFeedback(feedback)}
        Positive Feedback:
        {countPositiveFeedbackPercentage(
          countTotalFeedback(feedback),
          feedback
        )}
        %
      </div>
    </>
  );
};