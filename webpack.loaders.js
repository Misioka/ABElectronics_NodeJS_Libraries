module.exports = [
  {
    test: /\.js?$/,
    exclude: /(node_modules|bower_components|public\/)/,
    loader: "babel-loader",
    query: {
      cacheDirectory : true,
      plugins        : ['transform-runtime', 'transform-class-properties', 'transform-object-rest-spread'],
      presets        : ['es2015', 'react', 'stage-2']
    }
  }
]
