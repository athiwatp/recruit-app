import { takeLatest, call, put, select } from 'redux-saga/effects';
import {
  userSessions,
  employerSessions,
  retrieveSessions,
} from 'constants/api';
import { push } from 'react-router-redux';
import {
  LOGIN,
  LOGOUT,
  GET_SESSION,
  GET_SESSION_FAILURE,
  loginSuccess,
  logoutSuccess,
  getSessionSuccess,
  getSessionFailure,
} from 'reducers/session';
import { toggleIsLoading, setError } from 'reducers/ui';
import API from 'utils/api';
import PATHS from 'constants/paths';

const getUser = (state) => {
  return state.routing.locationBeforeTransitions.pathname.split('/')[1];
};

function* login ({ payload: session }) {
  yield put(toggleIsLoading());
  const user = yield select(getUser);
  try {
    const response = yield call(API.postData, retrieveSessions(user), { session }, false);
    yield put(loginSuccess(response));
    localStorage.setItem('token', response.api_token);
    yield put(push(
      user === 'user'
        ? PATHS.USER_DASHBOARD_HELLO
        : PATHS.EMPLOYER_DASHBOARD_HELLO
    ));
  } catch (e) {
    console.log(e);
    if (e.status === 404) {
      yield put(setError(e.statusText));
    }
  }
  yield put(toggleIsLoading());
}

function* logout ({ payload: user }) {
  try {
    const response = yield call(API.deleteData, retrieveSessions(user));
    yield put(logoutSuccess());
    localStorage.removeItem('token');
    yield put(push(user === 'user' ? PATHS.USER_LOGIN : PATHS.EMPLOYER_LOGIN));
  } catch (e) {
    console.log(e);
  }
}

function* getSession ({ payload: user }) {
  try {
    const response = yield call(API.getData, retrieveSessions(user));
    yield put(getSessionSuccess(response));
  } catch (e) {
    yield put(getSessionFailure(user));
    localStorage.removeItem('token');
    yield put(push(user === 'user' ? PATHS.USER_LOGIN : PATHS.EMPLOYER_LOGIN));
    console.log(e);
  }
}

export function* watchLogin () {
  yield takeLatest(LOGIN, login);
};

export function* watchLogout () {
  yield takeLatest(LOGOUT, logout);
};

export function* watchGetSession () {
  yield takeLatest(GET_SESSION, getSession);
}
