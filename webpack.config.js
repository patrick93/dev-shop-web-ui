var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
        'CART_API_URL': process.env.NODE_ENV === 'production' ? JSON.stringify("https://dev-shop-api.herokuapp.com") : JSON.stringify("http://localhost:5000")
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
