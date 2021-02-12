import PropTypes from 'prop-types';
import countTotalFeedback from './countTotalFeedback';
import countPositiveFeedbackPercentage from './countPositiveFeedbackPercentage';

export default function Statistics({ data }) {
  const { good, neutral, bad } = data;
  const total = countTotalFeedback(data);
  const percent = countPositiveFeedbackPercentage(total, good);
  return (
    <div>
      <h3>Statistics</h3>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {percent ? percent.toFixed() : 0}</li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  data: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
