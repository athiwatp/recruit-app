import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components';
import style from './job.scss';

const Job = (props) => {
  const {
    job,
    handleClick,
    isApplied,
  } = props;

  const renderDescription = () => {
    if (job.description.length > 100) {
      return `${job.description.substr(2, 150)}...`;
    }

    return job.description.substr(2, job.description.length - 2);
  };

  const renderCurrency = () => {
    switch (job.salary_currency) {
      case 'USD' : return '$';
      default: return '$';
    }
  };

  const renderSkills = () => {
    return job.subskill_list.slice(0,3).map((skill, index) => {
      return <div key={index}>{skill}</div>;
    });
  };

  const formatSalary = (salary) => {
    return salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={job.employer.logo.small} />
      </div>
      <div className={style['job-info']}>
        <div className={style.bold}>{job.name}</div>
        <div className={style.bold}>{job.employer.name}</div>
        <div className={style['salary-location']}>
          <div className={style['salary']}>
            <span>{renderCurrency()}{formatSalary(job.salary_from)} - {renderCurrency()}{formatSalary(job.salary_to)}</span> / {job.salary_type}
          </div>
          <div>
            <i className="fas fa-map-marker" /> {job.employer.address}
          </div>
        </div>
        <div className={style['description']}>{renderDescription()}</div>
        <div className={style.skills}>
          {renderSkills()}
          {job.subskill_list.length > 3 && <span>{job.subskill_list.length - 3} more</span>}
        </div>
      </div>
      <div className={style['apply-button']}>
        {
          isApplied
            ? <Button onClick={handleClick(job.application.id)} text="withdraw" className="btn-blue" />
            : <Button onClick={handleClick(job.id)} text="apply" />
        }
      </div>
    </div>
  );
};

Job.propTypes = {
  handleClick: PropTypes.func,
  isApplied:   PropTypes.bool,
  job:         PropTypes.object,
};
Job.defaultProps = {
  handleClick: () => {},
  isApplied:   false,
  job:         {},
};

export default Job;
