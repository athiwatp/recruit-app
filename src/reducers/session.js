import createActionCreators from 'utils/redux';

export const LOGIN = 'SESSION/LOGIN';
export const LOGIN_SUCCESS = 'SESSION/LOGIN_SUCCESS';
export const LOGOUT = 'SESSION/LOGOUT';
export const LOGOUT_SUCCESS = 'SESSION/LOGOUT_SUCCESS';
export const GET_SESSION = 'SESSION/GET_SESSION';
export const GET_SESSION_SUCCESS = 'SESSION/GET_SESSION_SUCCESS';
export const GET_SESSION_FAILURE = 'SESSION/GET_SESSION_FAILURE';

export const login = createActionCreators(LOGIN);
export const loginSuccess = createActionCreators(LOGIN_SUCCESS);
export const logout = createActionCreators(LOGOUT);
export const logoutSuccess = createActionCreators(LOGOUT_SUCCESS);
export const getSession = createActionCreators(GET_SESSION);
export const getSessionSuccess = createActionCreators(GET_SESSION_SUCCESS);
export const getSessionFailure = createActionCreators(GET_SESSION_FAILURE);

const initialState = {
  active: null,
  address: null,
  api_token: null,
  avatar: [],
  created_at: null,
  description: null,
  email: null,
  id: null,
  job_preference: null,
  latitude: null,
  longitude: null,
  name: undefined,
  phone: null,
  updated_at: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SESSION_SUCCESS:
    case LOGIN_SUCCESS: return action.payload;
    case GET_SESSION_FAILURE:
    case LOGOUT_SUCCESS: return initialState;
    default: return state;
  }
};
