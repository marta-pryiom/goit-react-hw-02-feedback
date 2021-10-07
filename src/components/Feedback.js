// import { Component } from 'react';
import s from './Feedback.module.css';

export function Section({ title, children }) {
  return (
    <div className={s.Feedback}>
      <h1 className={s.Title}>{title}</h1>
      {children}
    </div>
  );
}
export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.BtnBox}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={s.Btn}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
export function Statistics({ total, positivePercentage, good, neutral, bad }) {
  return (
    <div>
      <ul className={s.FeedbackInfoItems}>
        <li className={s.Item}>
          <p>Good : {good}</p>
        </li>
        <li className={s.Item}>
          <p>Neutral : {neutral}</p>
        </li>
        <li className={s.Item}>
          <p>Bad : {bad}</p>
        </li>
        <li className={s.Item}>
          <p>Total : {total}</p>
        </li>
        <li className={s.Item}>
          <p>Positive feedback : {positivePercentage} %</p>
        </li>
      </ul>
    </div>
  );
}
