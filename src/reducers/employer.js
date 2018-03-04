import createActionCreators from 'utils/redux';
import { LOGOUT_SUCCESS, GET_SESSION_FAILURE } from 'reducers/session';

export const GET_USERS = 'EMPLOYER/GET_USERS';
export const GET_USERS_SUCCESS = 'EMPLOYER/GET_USERS_SUCCESS';
export const GET_APPLICANTS = 'EMPLOYER/GET_APPLICANTS';
export const GET_APPLICANTS_SUCCESS = 'EMPLOYER/GET_APPLICANTS_SUCCESS';
export const REJECT_INTERVIEW = 'EMPLOYER/REJECT_INTERVIEW';
export const REJECT_INTERVIEW_SUCCESS = 'EMPLOYER/REJECT_INTERVIEW_SUCCESS';

export const getUsers = createActionCreators(GET_USERS);
export const getUsersSuccess = createActionCreators(GET_USERS_SUCCESS);
export const getApplicants = createActionCreators(GET_APPLICANTS);
export const getApplicantsSuccess = createActionCreators(GET_APPLICANTS_SUCCESS);
export const rejectInterview = createActionCreators(REJECT_INTERVIEW);
export const rejectInterviewSuccess = createActionCreators(REJECT_INTERVIEW_SUCCESS);

const initialState = {
  applicants: {
    interview_requests: [],
    meta: {},
  },
  users: {
    users: [],
    meta: {},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS: return {
      ...state,
      users: action.payload,
    };
    case GET_APPLICANTS_SUCCESS: return {
      ...state,
      applicants: action.payload,
    };
    case REJECT_INTERVIEW_SUCCESS: return {
      ...state,
      applicants: {
        interview_requests: state.applicants.interview_requests.filter(interview => interview.id !== action.payload.id),
      },
    };
    case GET_SESSION_FAILURE:
    case LOGOUT_SUCCESS: return initialState;
    default: return state;
  }
};
