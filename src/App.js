import { Component } from 'react';
import { Statistics } from './components/Feedback';
import { FeedbackOptions } from './components/Feedback';
import { Section } from './components/Feedback';

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
        ...currentEl,
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
    const {
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <div>
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
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;
