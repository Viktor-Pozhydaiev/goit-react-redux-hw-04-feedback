import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <h2 className="sd">{message}</h2>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
