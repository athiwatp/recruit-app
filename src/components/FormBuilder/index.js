import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Form from './Form';
import validate from './validate';

export default compose(
  connect((state, props) => ({ form: props.name })),
  reduxForm({ validate }),
)(Form);
