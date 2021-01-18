//// import './Alert.css'
import PropTypes from 'prop-types';
import s from './Alert.module.css';

function Alert({ text, type = '' }) {
  //// const currentType = type ? `Alert--${type}` : '';
  return (
    ////  <p role="alert" className={`Alert Alert--${type}`}>
    // // <p role="alert" className={`Alert ${currentType}`.trim()}>
    <p role="alert" className={s[type]}>
      {text}
    </p>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
};

export default Alert;
