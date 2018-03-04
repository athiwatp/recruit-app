import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { FormBuilder, Spinner } from 'components';
import { login } from 'components/FormBuilder/forms';
import style from './login.scss';
import PATHS from 'constants/paths';

const Login = (props) => {

  const {
    ui: { isLoading, error },
    sessionActions,
    location: { pathname },
  } = props;
  const user = pathname.split('/')[1];
  const getLink = () => {
    return user === 'user' ? PATHS.EMPLOYER_LOGIN : PATHS.USER_LOGIN;
  };

  return (
    <div className={style.container}>
      <div className={style['form-container-description']}>
        {user} Login
      </div>
      <div className={style['form-container']}>
        {error && <div className={style['error']}>{error}</div>}
        {!error && !isLoading && <div className={style['ghost']} />}
        {
          isLoading
            ? <Spinner />
            : <FormBuilder {...login} onSubmit={sessionActions.login} />
        }
      </div>
      <p className={style['redirect-msg']}>
        {user === 'user' ? 'Employer' : 'User'}?
        <Link to={getLink()} className={style['link-style']}>
          Login now
        </Link>
      </p>
    </div>
  );
};

export default Login;
