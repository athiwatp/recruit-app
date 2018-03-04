const webpack          = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config           = require('./configs/webpack.hot.js');
const serverConfig     = require('./configs/server-config');

const compiler = webpack(config);
const server   = new WebpackDevServer(compiler, {
  hot:                true,
  publicPath:         config.output.publicPath,
  historyApiFallback: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    /*"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"*/
  },

  stats: {
    colors:   true,
    progress: true,
    chunks:   false,
  },
});

server.listen(
  serverConfig.devServerPort,
  () => {
    console.log('Development server now is listening on:');
    console.log(`http://localhost:${serverConfig.devServerPort}`);
    console.log(`http://127.0.0.1:${serverConfig.devServerPort}`);
    console.log(serverConfig.devServerAddress);
  }
);
