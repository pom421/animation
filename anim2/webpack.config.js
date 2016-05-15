module.exports = {
  entry: './src/js/main.js',
  output: {
    path: './dist/js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'babel',
        include: __dirname 
        // query: {
        //   presets: ['babel-preset-es2015']
        // }
      }
    ] 
  }
}