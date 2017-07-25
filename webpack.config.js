const path = require('path');
const webpack = require('webpack');

const config = {
  context: __dirname,
  entry: ['./lib/Container.jsx'],
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Container.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: [/node_modules/, '/dist/'],
        options: {
          emitWarning: true,
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};

const demo = Object.assign({}, config, {
  output: {
    path: path.resolve(__dirname, 'demo/public'),
    filename: 'bundle.js',
    publicPath: '/demo/',
  },
  devtool: 'cheap eval-source-map',
  devServer: {
    hot: true,
    publicPath: '/demo/',
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './demo/index.jsx'
  ]
});

demo.module.rules.push({
  test: /\.scss$/,
  use: [{
    loader: "style-loader" // creates style nodes from JS strings
  }, {
    loader: "css-loader" // translates CSS into CommonJS
  }, {
    loader: "sass-loader" // compiles Sass to CSS
  }]
});


module.exports = [ config, demo];
