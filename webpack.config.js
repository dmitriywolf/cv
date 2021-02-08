module.exports = {
  mode: "development",
  entry: './src/index.jsx',

  module: {
    rules: [

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },

      // Loading images
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/, 
        use: [
          { 
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name]-[sha1:hash:7].[ext]'
            }
        }
        ]
      },

      // Loading fonts
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/, 
        use: [
          { 
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            }
        }
        ]
      }

    ]
  }














};