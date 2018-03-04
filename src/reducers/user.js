import createActionCreators from 'utils/redux';
import { LOGOUT_SUCCESS, GET_SESSION_FAILURE } from 'reducers/session';

export const GET_OPENINGS = 'USER/GET_OPENINGS';
export const GET_OPENINGS_SUCCESS = 'USER/GET_OPENINGS_SUCCESS';
export const APPLY_JOB = 'USER/APPLY_JOB';
export const APPLY_JOB_SUCCESS = 'USER/APPLY_JOB_SUCCESS';
export const GET_APPLIED_JOBS = 'USER/GET_APPLIED_JOBS';
export const GET_APPLIED_JOBS_SUCCESS = 'USER/GET_APPLIED_JOBS_SUCCESS';
export const REJECT_JOB = 'USER/REJECT_JOB';
export const REJECT_JOB_SUCCESS = 'USER/REJECT_JOB_SUCCESS';

export const getOpenings = createActionCreators(GET_OPENINGS);
export const getOpeningsSuccess = createActionCreators(GET_OPENINGS_SUCCESS);
export const applyJob = createActionCreators(APPLY_JOB);
export const applyJobSuccess = createActionCreators(APPLY_JOB_SUCCESS);
export const getAppliedJobs = createActionCreators(GET_APPLIED_JOBS);
export const getAppliedJobsSuccess = createActionCreators(GET_APPLIED_JOBS_SUCCESS);
export const rejectJob = createActionCreators(REJECT_JOB);
export const rejectJobSuccess = createActionCreators(REJECT_JOB_SUCCESS);

const initialState = {
  openings: {
    jobs: [],
    meta: {},
  },
  applied: {
    jobs: [],
    meta: {},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_OPENINGS_SUCCESS: return {
      ...state,
      openings: action.payload,
    };
    case GET_APPLIED_JOBS_SUCCESS: return {
      ...state,
      applied: action.payload,
    };
    case REJECT_JOB_SUCCESS: return {
      ...state,
      applied: {
        jobs: state.applied.jobs.filter(job => job.id !== action.payload.job_id),
      },
    };
    case APPLY_JOB_SUCCESS: return {
      ...state,
      openings: {
        jobs: state.openings.jobs.filter(job => job.id !== action.payload.job_id),
      },
    };
    case GET_SESSION_FAILURE:
    case LOGOUT_SUCCESS: return initialState;
    default: return state;
  }
};
