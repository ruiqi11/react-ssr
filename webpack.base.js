module.exports = {
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: '/node_modules/',
      loader: 'babel-loader',
      options: {
        presets: ["@babel/react", ['@babel/env', {
          targets: {
            browsers: ['last 2 versions']
          }
        }]]
      }
    }]
  }
};