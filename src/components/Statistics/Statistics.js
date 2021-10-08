import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import Notification from '../Notification';

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
Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
export default Statistics;
