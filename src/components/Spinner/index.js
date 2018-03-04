import React from 'react';
import style from './spinner.scss';

const Spinner = () => {
  return (
    <span className={style.spinner}>
      <i className="fas fa-4x fa-spinner fa-spin" />
    </span>
  );
};

export default Spinner;
