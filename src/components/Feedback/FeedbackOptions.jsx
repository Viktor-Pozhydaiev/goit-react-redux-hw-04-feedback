import css from './Feedback.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({
  onLeaveFeedback,
  options,
  id = nanoid(),
}) => {
  return (
    <ul className={css.btn__list}>
      {options.map(option => (
        <li key={option} className={css.btn__item}>
          <button
            id={option}
            type="button"
            className={css.btn__style}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
