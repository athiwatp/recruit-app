import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'reducers';
import rootSaga from 'sagas';
import immatureHistory from './history';
import {
  logger,
  router,
  saga,
  immutableStateInvariant,
} from './middlewares';

const middlewareEnhancer = (() => {
  const middlewares = [
    saga,
    router,
  ];
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'staging') {
    return composeWithDevTools(applyMiddleware(
      ...middlewares,
      immutableStateInvariant,
      logger,
    ));
  }

  return applyMiddleware(...middlewares);
})();

const store = createStore(rootReducer, middlewareEnhancer);

const history = syncHistoryWithStore(immatureHistory, store);

saga.run(rootSaga);

export {
  store,
  history,
};
