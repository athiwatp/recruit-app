import Loadable from 'react-loadable';

const asyncContainerLoader = (componentName) => {
  return Loadable({
    loader: () => import(`containers/${componentName}`),
    loading: () => null,
  });
};

const asyncComponentLoader = (componentName) => {
  return Loadable({
    loader: () => import(`components/${componentName}`),
    loading: () => null,
  });
};

const handleChange = (prevState, nextState) => {
  if (nextState.location.action !== 'POP') {
    window.scrollTo(0, 0);
  }
};


export { asyncContainerLoader, handleChange, asyncComponentLoader };
