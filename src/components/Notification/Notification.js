import s from './Notification.module.css';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <p className={s.NotifItem}>{message}</p>;
}
Notification.ptopTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
