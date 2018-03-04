import React from 'react';
import PropTypes from 'prop-types';
import { Navigator, Job } from 'components';
import PATHS from 'constants/paths';

const JobsTab = (props) => {
  const renderChildren = () => {
    const {
      user,
      userActions,
      ui,
      uiActions,
    } = props;
    return (
      React.Children.map(props.children, (child) => {
        if (child.props.location.pathname === PATHS.OPENINGS) {
          return React.cloneElement(child, {
            openings: user.openings,
            userActions,
            renderItem: renderJob(ApplyForJob),
            ui,
            uiActions,
          });
        } else if (child.props.location.pathname === PATHS.APPLIED_JOBS) {
          return React.cloneElement(child, {
            onMount: userActions.getAppliedJobs,
            data: user.applied.jobs.filter(job => job.application.state !== 'withdrawn'),
            renderItem: renderJob(rejectJob, true),
          });
        }
      }));
  };

  const rejectJob = (id) => () => props.userActions.rejectJob(id);

  const ApplyForJob = (id) => () => {
    const { uiActions, change } = props;
    uiActions.toggleDialog('ApplicationDialog');
    change('application', 'job_id', id);
  };

  const renderJob = (onClick, isApplied = false) => (job, index) => {
    return (
      <Job
        key={index}
        job={job}
        handleClick={onClick}
        isApplied={isApplied}
      />
    );
  };

  const { location: { pathname } } = props;

  return (
    <div>
      <Navigator
        tabsList={[
          { to: PATHS.OPENINGS, title: 'Openings'},
          { to: PATHS.APPLIED_JOBS, title: 'Applied'},
        ]}
        activeItem={pathname}
      />
      {renderChildren()}
    </div>
  );
};

JobsTab.propTypes = {
  user:        PropTypes.object,
  ui:          PropTypes.object,
  uiActions:   PropTypes.object,
  userActions: PropTypes.object,
  change:      PropTypes.func,
};
JobsTab.defaultProps = {
  openings:    {},
  ui:          {},
  uiActions:   {},
  userActions: {},
  change:  () => {},
};

export default JobsTab;
