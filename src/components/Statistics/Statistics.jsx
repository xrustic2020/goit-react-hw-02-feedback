import PropTypes from 'prop-types';
import Notification from 'components/Notification';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  const totalFeedback = total(good, neutral, bad);
  const percent = positivePercentage(totalFeedback, good);
  const markup = (
    <ul className={s.statisticsList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive feedback: {percent ? percent.toFixed() : 0}</li>
    </ul>
  );
  return (
    <>{totalFeedback ? markup : <Notification message="No feedback given" />}</>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
