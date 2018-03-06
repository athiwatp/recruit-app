import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ItemsList extends PureComponent {
  static propTypes = {
    data:       PropTypes.array,
    renderItem: PropTypes.func,
    onMount:    PropTypes.func,
  }
  static defaultProps = {
    data:       [],
    renderItem: () => {},
    onMount:    () => {},
  }

  componentDidMount () {
    this.props.onMount();
  }

  render () {
    const { data, renderItem } = this.props;
    return data.map(renderItem);
  }
}
