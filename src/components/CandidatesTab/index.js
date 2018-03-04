import React from 'react';
import PropTypes from 'prop-types';
import { Navigator, Interview, User } from 'components';
import PATHS from 'constants/paths';

const CandidatesTab = (props) => {

  const renderChildren = () => {
    const {
      employerActions,
      employer: { applicants, users },
    } = props;
    return (
      React.Children.map(props.children, (child) => {
        if (child.props.location.pathname === PATHS.APPLICANTS) {
          return React.cloneElement(child, {
            onMount: employerActions.getApplicants,
            renderItem: renderInterview,
            data: applicants.interview_requests.filter(interview => interview.state !== 'rejected'),
          });
        } else if (child.props.location.pathname === PATHS.USERS) {
          return React.cloneElement(child, {
            data: users.users,
            renderItem: renderUser,
            onMount: employerActions.getUsers,
          });
        }
      }));
  };

  const rejectInterview = (id) => () => props.employerActions.rejectInterview(id);

  const renderInterview = (interview, index) => {
    return (
      <Interview
        key={index}
        interview={interview}
        onClick={rejectInterview}
      />
    );
  };

  const renderUser = (user, index) => {
    return (
      <User
        key={index}
        user={user}
      />
    );
  };


  const { location: { pathname } } = props;

  return (
    <div>
      <Navigator
        tabsList={[
          { to: PATHS.APPLICANTS, title: 'Applicants'},
          { to: PATHS.USERS, title: 'Users'},
        ]}
        activeItem={pathname}
      />
      {renderChildren()}
    </div>
  );
};

CandidatesTab.propTypes = {
  employer:        PropTypes.object,
  employerActions: PropTypes.object,
};
CandidatesTab.defaultProps = {
  employer:        {},
  employerActions: {},
};

export default CandidatesTab;
