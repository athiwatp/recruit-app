import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './input.scss';

const Input = (props) => {

  const {
    input,
    input: { value },
    placeholder,
    label,
    type,
    meta: { touched, error, warning, valid },
    className,
  } = props;

  const isError = touched && error;

  const inputStyle = cx(
    style['form-control'],
    {
      [style.error]: isError,
    }
  );

  return (
    <div className={style['input-container']}>
      <div>
        <label className={style['label-input']}>
          <span>{label}</span>
          <input {...input}
            placeholder={isError || placeholder}
            type={type}
            className={inputStyle}
          />
        </label>
      </div>
    </div>
  );
};

Input.propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  className: PropTypes.string,
  inputStyle: PropTypes.string,
};
Input.defaultProps = {
  input: {},
  label: '',
  type: 'text',
  className: '',
  meta: {},
  inputStyle: 'form-control',
  placeholder: '',
};

export default Input;
