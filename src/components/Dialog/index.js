import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './dialog.scss';

export default class Dialog extends PureComponent {

  static propTypes = {
    onToggle:   PropTypes.func,
    showDialog: PropTypes.bool,
    title:      PropTypes.string,
    children:   PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    size:       PropTypes.string,
  };

  static defaultProps = {
    showDialog: false,
    onToggle:   () => console.log('onToggle'),
    title:      '',
    children:   null,
    size:       'modal-sm',
  };

  componentDidUpdate (prevProps) {
    const { showDialog } = this.props;
    if (showDialog && (showDialog !== prevProps.showDialog)) {
      this.modal.focus();
    }
  }

  handleKeyDown = (event) => {
    const keyEsc = ['Escape', 'Esc']; // the key name 'Esc' is used in IE
    if (keyEsc.indexOf(event.key) !== -1 && !this.isBackgroundDisabled()) {
      this.props.onToggle();
    }
  }

  isBackgroundDisabled = () => this.props.backgroundDisabled;

  onToggle = (event) => {
    if (event.target === this.modal) {
      this.props.onToggle();
    }
  }

  render () {
    const {
      onToggle,
      showDialog,
      children,
      title,
      size,
    } = this.props;

    const dialogStyle = cx({
      [style['dialog']]: true,
      [style['show-dialog']]: showDialog,
    });

    return (
      <div
        className={dialogStyle}
        tabIndex={-1}
        onKeyDown={this.handleKeyDown}
        onClick={this.onToggle}
        ref={(node) => this.modal = node}
      >
        <div className={style[size]}>
          <div className={style['title-container']}>
            <h2 className={style['title']}>{title}</h2>
          </div>
          <div className={style['content-container']}>
            {showDialog && children}
          </div>
        </div>
      </div>
    );
  }
}
