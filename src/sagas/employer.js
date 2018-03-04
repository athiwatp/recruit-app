import { takeLatest, call, put } from 'redux-saga/effects';
import {
  employerUsers,
  employerInterviewRequests,
  employerRejectInterviewRequests,
} from 'constants/api';
import {
  GET_USERS,
  GET_APPLICANTS,
  REJECT_INTERVIEW,
  getUsersSuccess,
  getApplicantsSuccess,
  rejectInterviewSuccess,
} from 'reducers/employer';
import apiCall from './apiCall';
import API from 'utils/api';
import PATHS from 'constants/paths';

const getUsers = () => {
  return apiCall(null, API.getData, employerUsers, getUsersSuccess, PATHS.EMPLOYER_LOGIN);
};

const getApplicants = () => {
  return apiCall(null, API.getData, employerInterviewRequests, getApplicantsSuccess, PATHS.EMPLOYER_LOGIN);
};

const rejectInterview = ({ payload }) => {
  return apiCall(null, API.postData, () => employerRejectInterviewRequests(payload), rejectInterviewSuccess, PATHS.EMPLOYER_LOGIN);
};

export function* watchGetUsers () {
  yield takeLatest(GET_USERS, getUsers);
};

export function* watchGetApplicants () {
  yield takeLatest(GET_APPLICANTS, getApplicants);
}

export function* watchRejectInterview () {
  yield takeLatest(REJECT_INTERVIEW, rejectInterview);
}
