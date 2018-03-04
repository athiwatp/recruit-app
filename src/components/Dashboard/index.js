import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Header, Navigator, Dialog } from 'components';
import PATHS from 'constants/paths';
import style from './dashboard.scss';
import getTabList from './helpers';

export default class Dashboard extends PureComponent {

  static propTypes = {
    session:         PropTypes.object,
    user:            PropTypes.object,
    employer:        PropTypes.object,
    ui:              PropTypes.object,
    userActions:     PropTypes.object,
    sessionActions:  PropTypes.object,
    employerActions: PropTypes.object,
    uiActions:       PropTypes.object,
    change:          PropTypes.func,
  };

  static defaultProps = {
    session:         {},
    user:            {},
    employer:        {},
    ui:              {},
    userActions:     {},
    sessionActions:  {},
    employerActions: {},
    uiActions:       {},
    change:          () => {},
  };

  componentDidMount () {
    const { session, location: { pathname } } = this.props;
    if (!session.api_token) {
      this.props.sessionActions.getSession(pathname.split('/')[1]);
    }
  }

  renderChildren = () => {
    return React.Children.map(this.props.children, (child) => {
      if (child.props.location.pathname === PATHS.USER_DASHBOARD_HELLO
        || child.props.location.pathname === PATHS.EMPLOYER_DASHBOARD_HELLO
      ) {
        return React.cloneElement(child, { name: this.props.session.name });
      } else if (child.props.location.pathname === PATHS.USERS
        || child.props.location.pathname === PATHS.APPLICANTS
      ) {
        return React.cloneElement(child, {
          employer: this.props.employer,
          employerActions: this.props.employerActions,
        });
      }

      return React.cloneElement(child, {
        user: this.props.user,
        userActions: this.props.userActions,
        ui: this.props.ui,
        uiActions: this.props.uiActions,
        change: this.props.change,
      });
    });
  }

  render () {
    const {
      location: { pathname },
      ui,
      uiActions,
      sessionActions: { logout },
      session,
    } = this.props;

    return (
      <div className={style['container']}>
        <Header
          logout={logout}
          path={pathname.split('/')[1]}
          user={session}
        />
        <Navigator
          tabsList={getTabList(pathname.split('/')[1])}
          activeItem={pathname}
          stretch={{ padding: '16px 15% 0' }}
        />
        <div className={style['tab']}>{this.renderChildren()}</div>
      </div>
    );
  }
};
