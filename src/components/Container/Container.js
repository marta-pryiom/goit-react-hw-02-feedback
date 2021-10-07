import s from './Container.module.css';

function Container({ children }) {
  return <div className={s.Feedback}>{children}</div>;
}
export default Container;
