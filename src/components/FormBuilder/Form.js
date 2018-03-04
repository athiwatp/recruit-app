import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import style from './form.scss';
import {
  Input,
  Textarea,
  Button,
} from 'components';

export default class Form extends PureComponent {
  static propTypes = {
    fields:           PropTypes.array,
    buttons:          PropTypes.array,
    handleSubmit:     PropTypes.func,
  }

  static defaultProps = {
    fields:         [],
    buttons:        [],
    handleSubmit:   () => console.log('onSubmit'),
  };

  setComponent = (type) => {
    switch (type) {
      case 'textarea': return Textarea;
      default:         return Input;
    }
  }

  render () {
    const {
      fields,
      buttons,
      handleSubmit,
    } = this.props;

    return (
      <form
        onSubmit={handleSubmit}
        noValidate
      >
        {
          fields.map((field, i) => {
            return (
              <Field
                key={i}
                component={this.setComponent(field.type)}
                {...field}
              />
            );
          })
        }
        <div className={style['button-block']}>
          {
            buttons.map((button, index) => (
              <Button key={index} {...button} />
            ))
          }
        </div>
      </form>
    );
  }
}
