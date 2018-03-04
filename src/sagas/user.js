import { takeLatest, call, put } from 'redux-saga/effects';
import {
  userJobs,
  userInterviewRequests,
  userJobsApplied,
  userRejectInterviewRequests,
} from 'constants/api';
import {
  GET_OPENINGS,
  APPLY_JOB,
  GET_APPLIED_JOBS,
  REJECT_JOB,
  getOpeningsSuccess,
  applyJobSuccess,
  getAppliedJobsSuccess,
  rejectJobSuccess,
} from 'reducers/user';
import apiCall from './apiCall';
import API from 'utils/api';


const getAppliedJobs = () => {
  return apiCall(null, API.getData, userJobsApplied, getAppliedJobsSuccess);
};

const getOpenings = () => {
  return apiCall(null, API.getData, userJobs, getOpeningsSuccess);
};

const applyJob = ({ payload }) => {
  return apiCall({ interview_request: payload }, API.postData, userInterviewRequests, applyJobSuccess);
};

const rejectJob = ({ payload }) => {
  return apiCall(null, API.postData, () => userRejectInterviewRequests(payload), rejectJobSuccess);
};

export function* watchGetAppliedJobs () {
  yield takeLatest(GET_APPLIED_JOBS, getAppliedJobs);
};

export function* watchGetOpenings () {
  yield takeLatest(GET_OPENINGS, getOpenings);
};

export function* watchApplyJob () {
  yield takeLatest(APPLY_JOB, applyJob);
};

export function* watchRejectJob () {
  yield takeLatest(REJECT_JOB, rejectJob);
};
