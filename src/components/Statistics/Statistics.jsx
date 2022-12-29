import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statistics__list}>
      <li className={css.statistics__item}>Good: {good}</li>
      <li className={css.statistics__item}>Neutral: {neutral}</li>
      <li className={css.statistics__item}>Bad: {bad}</li>
      <li className={css.statistics__item}>Total:{total} </li>
      <li className={css.statistics__item}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
