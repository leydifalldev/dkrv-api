const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { spawn } = require('child_process');

function OnFirstBuildDonePlugin() {
  //let isInitialBuild = true;
  return {
    apply: compiler => {
      compiler.hooks.done.tap('OnFirstBuildDonePlugin', compilation => {
        isInitialBuild = false;
        spawn('nodemon dist/main.js', {
          stdio: 'inherit',
          shell: true,
        });
      });
    },
  };
}

module.exports = function(options) {
  return {
    ...options,
    entry: ['./src/main.ts'],
    watch: true,
    devtool: 'source-map',
    plugins: [
      ...options.plugins,
      new CopyWebpackPlugin([
        {
          from: './src/gateway/gateway.proto',
          to: './gateway/gateway.proto',
        },
      ]),
      OnFirstBuildDonePlugin(),
    ],
    resolve: {
      extensions: [...options.resolve.extensions, '.proto'],
    },
  };
};
