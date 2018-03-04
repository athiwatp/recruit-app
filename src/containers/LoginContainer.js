import React, { component } from 'react';
import { connect } from 'react-redux';
import { Login } from 'components';
import { bindActionCreators } from 'redux';
import * as sessionActionCreators from 'reducers/session';

const mapStateToProps = (state) => {
  return { session: state.session, ui: state.ui };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sessionActions: bindActionCreators(sessionActionCreators, dispatch),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
