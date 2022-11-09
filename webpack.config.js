const path = require('path');
const Plugin = require('./plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve('./loader1.js') // 同步 loader
          },
          {
            loader: path.resolve('./loader2.js') // 异步 loader
          }
        ]
      }
    ]
  },
  plugins: [
    new Plugin()
  ]
};