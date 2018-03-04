import React from 'react';
import PropTypes from 'prop-types';
import style from './interview.scss';
import { Button } from 'components';

const Interview = (props) => {
  const {
    interview: {
      user,
      job,
      expected_salary_amount,
      expected_salary_currency,
      state,
      message,
      id,
    },
    onClick,
  } = props;

  const renderCurrency = () => {
    switch (expected_salary_currency) {
      case 'USD' : return '$';
      default: return '$';
    }
  };

  const renderMessage = () => {
    if (message.length > 100) {
      return `${message.substr(2, 150)}...`;
    }

    return message;
  };

  const formatSalary = () => {
    return (
      expected_salary_amount
      && expected_salary_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    );
  };

  return (
    <div className={style.container}>
      <div className={style.avatar}>
        <img src={user.avatar.medium} />
      </div>
      <div className={style['interview-info']}>
        <div className={style.bold}>{job.name}</div>
        <div className={style.bold}>{user.name}</div>
        <div className={style['salary-location']}>
          <div className={style['salary']}>
            Expected Salary: <span>{renderCurrency()}{formatSalary()}</span>
          </div>
          <div>
            <i className="fas fa-envelope" /> {user.email}
          </div>
          <div>
            <i className="fas fa-map-marker" /> {user.address}
          </div>
        </div>
        <div className={style['message']}>
          {message}
        </div>
      </div>
      <div className={style['reject-button']}>
        {
          state === 'pending'
            ? <Button onClick={onClick(id)} text="reject" />
            : <div className={style['state']}>{state}</div>
        }
      </div>
    </div>
  );
};

Interview.propTypes = {
  onClick: PropTypes.func,
  interview: PropTypes.object,
};
Interview.defaultProps = {
  onClick: () => {},
  interview: {},
};

export default Interview;
