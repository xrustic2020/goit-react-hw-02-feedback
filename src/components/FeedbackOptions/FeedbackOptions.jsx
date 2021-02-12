import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.feedback}>
      {options.map(item => (
        <button
          type="button"
          key={item}
          onClick={() => {
            onLeaveFeedback(item);
          }}
        >
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>
  );
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
