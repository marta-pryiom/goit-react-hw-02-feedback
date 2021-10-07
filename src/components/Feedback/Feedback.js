// import { Component } from 'react';
import s from './Feedback.module.css';

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
export default FeedbackOptions;
