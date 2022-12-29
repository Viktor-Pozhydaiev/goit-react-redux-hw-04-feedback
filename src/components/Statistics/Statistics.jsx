import css from './Statistics.module.css';
import { useSelector } from 'react-redux';
import { Notification } from 'components/Notification/Notification';

export const Statistics = () => {
  const feedback = useSelector(state => state);

  const countTotalFeedback = total => {
    total = feedback.good + feedback.bad + feedback.neutral;
    return total;
  };
  const total = countTotalFeedback();

  const positivePercentage = () => {
    return countTotalFeedback()
      ? Math.round((feedback.good * 100) / countTotalFeedback())
      : 0;
  };

  return (
    <>
      {total !== 0 ? (
        <ul className={css.statistics__list}>
          <li className={css.statistics__item}>Good: {feedback.good}</li>
          <li className={css.statistics__item}>Neutral: {feedback.neutral}</li>
          <li className={css.statistics__item}>Bad: {feedback.bad}</li>
          <li className={css.statistics__item}>Total:{countTotalFeedback()}</li>
          <li className={css.statistics__item}>
            Positive feedback: {positivePercentage()}%
          </li>
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};
