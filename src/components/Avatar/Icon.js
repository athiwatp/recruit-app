import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import style from './icon.scss';

const Icon = ({ firstName, lastName, avatar }) => {
  const imageStyle = {
    backgroundImage: `url(${avatar.small})`,
  };

  return <div style={imageStyle} className={style['avatar']} />;
};

Icon.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  avatar: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};
Icon.defaultProps = {
  firstName: '',
  lastName: '',
  avatar: { small: ''},
};

export default Icon;
