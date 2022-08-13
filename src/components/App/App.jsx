import React, { useState } from 'react';
import Feedback from '../Feedback/Feedback';
import Statistics from '../Statistics/Statistics';
import { Container, CardContainer } from '../App/App.styled';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedback = Math.floor((good * 100) / (good + neutral + bad));
    return positiveFeedback;
  };

  return (
    <Container>
      <CardContainer>
        <Feedback
          goodFeedback={handleClickGood}
          neutralFeedback={handleClickNeutral}
          badFeedback={handleClickBad}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </CardContainer>
    </Container>
  );
}

export default App;
