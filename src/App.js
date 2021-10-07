import { Component } from 'react';
import FeedbackOptions from './components/Feedback';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Container from './components/Container';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = e => {
    const currentEl = e.target.value;
    this.setState(prev => {
      return {
        ...prev,
        [currentEl]: prev[currentEl] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const allReviews = this.countTotalFeedback();
    const positivePersent = this.state.good;
    return this.state.good
      ? Math.ceil((positivePersent / allReviews) * 100)
      : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const optionValue = ['good', 'neutral', 'bad'];
    const { onLeaveFeedback } = this;
    const totalFn = this.countTotalFeedback();
    const PositiveFn = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={optionValue}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFn}
            positivePercentage={PositiveFn}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
