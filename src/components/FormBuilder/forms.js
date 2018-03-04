const createField = (name, placeholder, label, opt = {}) => {
  return { name, placeholder, label, ...opt };
};

const createButton = (text, className, opt = {}) => {
  if (typeof className === 'object') {
    opt = className;
    className = 'btn-green';
  }

  return { text, className, ...opt };
};

const createForm = (name, fields, buttons = []) => {
  return { name, fields, buttons };
};

export const login = createForm(
  'login',
  [
    createField('email', 'Enter the E-mail', 'E-mail'),
    createField('password', 'Enter the Password', 'password', { type: 'password' }),
  ],
  [createButton('login', 'btn-blue', { type: 'submit'})],
);

export const application = createForm(
  'application',
  [
    createField('expected_salary_amount', 'Enter the salary', 'salary', { type: 'number' }),
    createField('message', 'Enter the message (optional)', 'message', { type: 'textarea' }),
  ],
  [createButton('Apply', 'btn-green', { type: 'submit'})],
);
