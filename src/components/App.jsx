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

  return (
    <>
      <FBtn btnName="Good" onClick={() => handleBtnClick('Good')} />
      <FBtn btnName="Neutral" onClick={() => handleBtnClick('Neutral')} />
      <FBtn btnName="Bad" onClick={() => handleBtnClick('Bad')} />
      <div>
        Good: {feedback.Good}, Neutral: {feedback.Neutral}, Bad: {feedback.Bad}
      </div>
    </>
  );
};
