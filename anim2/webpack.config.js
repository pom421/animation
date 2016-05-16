module.exports = {
  entry: './src/js/main.js',
  output: {
    path: './dist/js/',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true, 
    port: 3333, 
    publicPath: '/dist/js'
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