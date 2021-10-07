import React from 'react';
import s from './Statistics.module.css';
import Notification from './Notification';

function Statistics({ total, positivePercentage, good, neutral, bad }) {
  return (
    <>
      {total ? (
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
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
}
export default Statistics;
