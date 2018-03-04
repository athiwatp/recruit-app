import React from 'react';
import { Provider } from 'react-redux';
import routes from './routes';

const Root = ({ store }) => (<Provider store={store}>{routes}</Provider>);

export default Root;
