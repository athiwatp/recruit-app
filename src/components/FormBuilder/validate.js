const validate = values => {
  const errors = {};
  console.log(values);
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid E-mail';
  }

  if (!values.password) {
    errors.password = 'Password is Required';
  }

  if (isNaN(Number(values.expected_salary_amount))) {
    errors.expected_salary_amount = 'Must be a number';
  }

  if (Number(values.expected_salary_amount) < 1) {
    errors.expected_salary_amount = 'Must be more than 0';
  }

  return errors;
};

export default validate;
