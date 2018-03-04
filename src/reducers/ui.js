import createActionCreators from 'utils/redux';
import { APPLY_JOB_SUCCESS } from 'reducers/user';
import { LOGOUT_SUCCESS, GET_SESSION_FAILURE } from 'reducers/session';
import { LOCATION_CHANGE } from 'react-router-redux';

export const TOGGLE_DIALOG = 'TOGGLE_DIALOG';
export const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const toggleDialog = createActionCreators(TOGGLE_DIALOG);
export const toggleIsLoading = createActionCreators(TOGGLE_IS_LOADING);
export const setError = createActionCreators(SET_ERROR);

const initialState = {
  dialog: { show: false, component: null },
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DIALOG: return {
      ...state,
      dialog: {
        show: !!action.payload,
        component: action.payload || null,
      },
    };
    case APPLY_JOB_SUCCESS: return {
      ...state,
      dialog: initialState.dialog,
    };
    case TOGGLE_IS_LOADING: return {
      ...state,
      isLoading: !state.isLoading,
    };
    case GET_SESSION_FAILURE:
    case LOGOUT_SUCCESS: return initialState;
    case SET_ERROR: return {
      ...state,
      error: action.payload,
    };
    case LOCATION_CHANGE: return {
      ...state,
      error: null,
    };
    default: return state;
  }
};
