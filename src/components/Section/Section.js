import s from './Section.module.css';
import PropTypes from 'prop-types';
function Section({ title, children }) {
  return (
    <div>
      <h1 className={s.Title}>{title}</h1>
      {children}
    </div>
  );
}
Section.ptopTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Section;
