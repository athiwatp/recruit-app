import React from 'react';
import PropTypes from 'prop-types';
import style from './button.scss';

const Button = ({ className, text, type, onClick }) => {
  return (
    <button
      type={type}
      className={style[className]}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  className: 'btn-green',
  text: '',
  type: 'button',
  onClick: () => {},
};

export default Button;
