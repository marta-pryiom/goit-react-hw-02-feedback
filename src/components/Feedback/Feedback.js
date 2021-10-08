import s from './Feedback.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.BtnBox}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          value={option}
          className={s.Btn}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array,
};
export default FeedbackOptions;
