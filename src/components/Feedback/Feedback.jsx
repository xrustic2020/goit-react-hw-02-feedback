import Statistics from 'components/Statistics';
import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  good = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  neutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  bad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    return (
      <section>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.good}>
          Good
        </button>
        <button type="button" onClick={this.neutral}>
          Neutral
        </button>
        <button type="button" onClick={this.bad}>
          Bad
        </button>
        <Statistics data={this.state} />
      </section>
    );
  }
}
export default Feedback;
