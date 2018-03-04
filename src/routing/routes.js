import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  IndexRedirect,
} from 'react-router';
import { history } from 'store';
import { asyncContainerLoader, asyncComponentLoader, handleChange } from 'utils/routing';
import PATHS from 'constants/paths';

export default (
  <Router history={history}>
    <Route path={PATHS.ROOT} onChange={handleChange} >
      <IndexRedirect to={PATHS.USER} />
      <Route component={asyncContainerLoader('DashboardContainer')} path={PATHS.USER} >
        <IndexRedirect to={PATHS.USER_DASHBOARD_HELLO} />
        <Route component={asyncComponentLoader('Greetings')} path={PATHS.USER_DASHBOARD_HELLO} />
        <Route component={asyncComponentLoader('JobsTab')} path={PATHS.JOBS} >
          <IndexRedirect to={PATHS.OPENINGS} />
          <Route component={asyncComponentLoader('OpeningsTab')} path={PATHS.OPENINGS} />
          <Route component={asyncComponentLoader('ItemsList')} path={PATHS.APPLIED_JOBS} />
        </Route>
      </Route>
      <Route component={asyncContainerLoader('DashboardContainer')} path={PATHS.EMPLOYER} >
        <IndexRedirect to={PATHS.EMPLOYER_DASHBOARD_HELLO} />
        <Route component={asyncComponentLoader('Greetings')} path={PATHS.EMPLOYER_DASHBOARD_HELLO} />
        <Route component={asyncComponentLoader('CandidatesTab')} path={PATHS.CANDIDATES} >
          <IndexRedirect to={PATHS.APPLICANTS} />
          <Route component={asyncComponentLoader('ItemsList')} path={PATHS.APPLICANTS} />
          <Route component={asyncComponentLoader('ItemsList')} path={PATHS.USERS} />
        </Route>
      </Route>
      <Route component={asyncContainerLoader('LoginContainer')} path={PATHS.USER_LOGIN} />
      <Route component={asyncContainerLoader('LoginContainer')} path={PATHS.EMPLOYER_LOGIN} />
    </Route>
  </Router>
);
