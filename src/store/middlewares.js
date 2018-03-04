import { routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import createImmutableStateInvariant from 'redux-immutable-state-invariant';
import history from './history';

const router                  = routerMiddleware(history);
const saga                    = createSagaMiddleware();
const immutableStateInvariant = createImmutableStateInvariant();

export { logger, router, saga, immutableStateInvariant };
