import { connect } from 'react-redux';
import { Dashboard } from 'components';
import { bindActionCreators } from 'redux';
import * as sessionActionCreators from 'reducers/session';
import * as userActionCreators from 'reducers/user';
import * as employerActionCreators from 'reducers/employer';
import * as uiActionCreators from 'reducers/ui';
import { change } from 'redux-form';

const mapStateToProps = (state) => {
  return {
    session: state.session,
    user: state.user,
    employer: state.employer,
    ui: state.ui,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActionCreators, dispatch),
    sessionActions: bindActionCreators(sessionActionCreators, dispatch),
    employerActions: bindActionCreators(employerActionCreators, dispatch),
    uiActions: bindActionCreators(uiActionCreators, dispatch),
    change: bindActionCreators(change, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
