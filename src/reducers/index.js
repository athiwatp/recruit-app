import { combineReducers } from 'redux';

import routing from './routing';
import session from './session';
import { reducer as form } from 'redux-form';
import user from './user';
import employer from './employer';
import ui from './ui';

export default combineReducers({
  routing,
  session,
  form,
  user,
  employer,
  ui,
});
