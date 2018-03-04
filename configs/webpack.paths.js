const path = require('path');

const root   = path.resolve(__dirname, '..');
const src    = path.resolve(root, 'src');
const assets = path.resolve(src, 'assets');

module.exports = {
  dist:            path.join(root, 'dist'),
  src,
  'api':            path.resolve(src, 'api'),
  'components':     path.resolve(src, 'components'),
  'constants':      path.resolve(src, 'constants'),
  'routing':        path.resolve(src, 'routing'),
  'utils':          path.resolve(src, 'utils'),
  'stylesheets':    path.resolve(src, 'stylesheets'),
  'reducers':       path.resolve(src, 'reducers'),
  'containers':     path.resolve(src, 'containers'),
  'store':          path.resolve(src, 'store'),
  'sagas':          path.resolve(src, 'sagas'),

  root,
  // 'dist':           path.resolve(root, 'dist'),
  'tests':          path.resolve(root, 'tests'),
  'configs':        path.resolve(root, 'configs'),
  'mock-data':      path.resolve(root, 'mock-data'),
  'public':         '/assets/spa/',
  'productionRoot': path.resolve(root, '../../public'),
};
