import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import style from './navigator.scss';
import cx from 'classnames';

const Navigator = ({ tabsList, activeItem, stretch }) => {

  const isActiveKey = (location) => {
    return cx({
      [style.active]: activeItem.indexOf(location) > -1,
    });
  };

  return (
    <nav className={style['nav']}>
      <ul className={style['navbar']} style={stretch}>
        {
          tabsList.map(({ to, title }, index) => (
            <li key={index} className={style['item']}>
              <Link to={to} className={isActiveKey(to)} dangerouslySetInnerHTML={{__html: title}} />
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

Navigator.propTypes = {
  tabsList: PropTypes.array,
  activeItem: PropTypes.string,
  stretch: PropTypes.object,
};
Navigator.defaultProps = {
  tabsList: [],
  activeItem: '',
  stretch: null,
};

export default Navigator;
