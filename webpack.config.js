module.exports = {
  entry: "./app/app.js",
  output: {
    path: __dirname,
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query:
         {
           presets:['react', 'es2015']
         }
      }
    ]
  }
};
