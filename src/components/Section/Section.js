import s from './Section.module.css';
function Section({ title, children }) {
  return (
    <div>
      <h1 className={s.Title}>{title}</h1>
      {children}
    </div>
  );
}
export default Section;
