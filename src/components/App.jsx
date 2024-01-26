import React, { useState } from 'react';
import { Statistics } from './statistics/Statistics';
import { Notification } from './notification/Notification';
import { FeedbackOptions } from './feedbackoptions/FeedbackOptions';

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
      <h1>Please leave feedback</h1>
      <FeedbackOptions
        options={['Good', 'Neutral', 'Bad']}
        onLeaveFeedback={handleBtnClick}
      />
      <h2>Statistics</h2>
      {countTotalFeedback(feedback) > 0 ? (
        <Statistics
          good={feedback.Good}
          neutral={feedback.Neutral}
          bad={feedback.Bad}
          total={countTotalFeedback(feedback)}
          positivePercentage={countPositiveFeedbackPercentage(
            countTotalFeedback(feedback),
            feedback
          )}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};
