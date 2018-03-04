import React from 'react';
import PropTypes from 'prop-types';
import style from './user.scss';

const User = (props) => {
  const {
    user: {
      name,
      description,
      email,
      address,
      avatar,
      active,
      job_preference,
    },
  } = props;

  return (
    <div className={style['container']}>
      <div className={style.avatar}>
        <img src={avatar.medium} />
      </div>
      <div className={style['user-info']}>
        <div className={style.bold}>{name}</div>
        <div className={style.bold}>{description}</div>
        <div className={style['contact']}>
          <div>
            <i className="fas fa-envelope" /> {email}
          </div>
          <div>
            <i className="fas fa-map-marker" /> {address}
          </div>
        </div>
        <div className={style['job-preference']}>
          Job Preference: <span>{job_preference}</span>
        </div>
      </div>
      <div className={style['active']}>
        { active ? 'Active' : 'Not Active' }
      </div>
    </div>
  );
};

User.propTypes = { user: PropTypes.object };
User.defaultProps = { user: {} };

export default User;
