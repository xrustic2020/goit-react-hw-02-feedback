import { Component } from 'react';

import Container from 'components/Container';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';

import countTotalFeedback from './function/countTotalFeedback';
import countPositiveFeedbackPercentage from './function/countPositiveFeedbackPercentage';
import leaveFeedback from './function/leaveFeedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={leaveFeedback.bind(this)}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
