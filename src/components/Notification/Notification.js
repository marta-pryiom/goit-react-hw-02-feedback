import s from './Notification.module.css';

function Notification({ message }) {
  return <p className={s.NotifItem}>{message}</p>;
}
export default Notification;
