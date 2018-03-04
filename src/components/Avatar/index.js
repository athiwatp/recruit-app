import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import style from './avatar.scss';

export default class Avatar extends Component {

  static propTypes = {
    user:   PropTypes.object,
    logout: PropTypes.func,
    path:   PropTypes.string,
  };

  static defaultProps = {
    user:   {},
    logout: () => {},
    path:   '',
  };

  state = { show: false };

  handleLogout = () => this.props.logout(this.props.path)

  handleClick = (e) => {
    e.target.focus();
    this.setState({ show: !this.state.show });
  }

  onBlur = (e) => {
    // firefox onBlur issue workaround
    if (e.nativeEvent.explicitOriginalTarget &&
        e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget) {
      return;
    }
    setTimeout(() => this.setState({ show: false }), 200);
  }

  render () {
    const { user: { name, email, logo, avatar } } = this.props;
    return (
      <div className={style['account-content']}>
        <button
          type="button"
          onClick={this.handleClick}
          onBlur={this.onBlur}
        >
          <Icon firstName={name} avatar={logo || avatar} />
          <span className={style.name}>{name}</span>
          <span className={style['caret']} />
        </button>
        {
          this.state.show
          && <div className={style['popover']}>
            <ul className={style['list-style']}>
              <li className={style['link-item']}>
                {name}
                <small>{email}</small>
              </li>
              <li className={style['header-item']} onClick={this.handleLogout}>
                Logout
              </li>
            </ul>
          </div>
        }
      </div>
    );
  }
}
