import React from 'react';
import PropTypes from 'prop-types';
import style from './greetings.scss';

const Greetings = ({ name }) => <div className={style.message}>Hello {name}!</div>;

Greetings.propTypes = { name: PropTypes.string };
Greetings.defaultProps = { name: 'John' };

export default Greetings;
