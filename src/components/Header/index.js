import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'components';
import style from './header.scss';

const Header = ({ logout, path, user }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>RecruitApp</div>
      <Avatar logout={logout} path={path} user={user} />
    </div>
  );
};

Header.propTypes = {
  logout: PropTypes.func,
  path:   PropTypes.string,
  user:   PropTypes.object,
};
Header.defaultProps = {
  logout: () => {},
  path:   '',
  user:   {},
};

export default Header;
