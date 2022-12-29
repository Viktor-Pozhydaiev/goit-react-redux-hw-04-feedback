import css from './Feedback.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addBad,
  addGood,
  addNeutral,
  clearFeedback,
} from 'redux/feedbackSlice';

export const FeedbackOptions = () => {
  const feedBack = useSelector(state => state);
  const dispatch = useDispatch();
  const name = Object.keys(feedBack);

  const addNewFeedback = event => {
    const id = event.target.id;

    switch (id) {
      case 'good':
        dispatch(addGood(1));
        break;

      case 'neutral':
        dispatch(addNeutral(1));
        break;

      case 'bad':
        dispatch(addBad(1));
        break;
      default:
        console.warn(`${id} pleas check your id`);
    }
  };

  return (
    <ul className={css.btn__list}>
      {name.map(name => (
        <li key={name} className={css.btn__item}>
          <button
            id={name}
            type="button"
            className={css.btn__style}
            onClick={addNewFeedback}
          >
            {name}
          </button>
        </li>
      ))}
      <button
        className={css.btn__style}
        type="button"
        onClick={() => dispatch(clearFeedback())}
      >
        Clear
      </button>
    </ul>
  );
};
