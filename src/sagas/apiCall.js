import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import PATHS from 'constants/paths';

function* apiCall (payload, method, url, onSuccess, loginRedirect = PATHS.USER_LOGIN) {
  try {
    const response = yield call(method, url(), payload);
    yield put(onSuccess(response));
  } catch (e) {
    console.log(e);
    yield put(getSessionFailure(user));
    localStorage.removeItem('token');
    yield put(push(loginRedirect));
  }
}

export default apiCall;
