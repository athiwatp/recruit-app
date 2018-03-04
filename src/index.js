import 'stylesheets/normalize.css';

import React from 'react';
import { render } from 'react-dom';
// import style from './index.scss';
import { store } from 'store';
import Root from 'routing';

// const App = () => <div className={style['title']}>hello!</div>;

render(<Root store={store} />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
