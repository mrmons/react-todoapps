var HTMLwebpackPlugin = require('html-webpack-plugin');
var HTMLwebpackPluginConfig= new HTMLwebpackPlugin({
  template: __dirname +'/app/index.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports={
  entry:[
    './app/TodoApp.jsx'
  ],
  output:{
    path: __dirname+'/public',
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {test: /\.jsx$/,exclude:/node_modules/,loader:'babel-loader'}
    ]
  },
  plugins:[HTMLwebpackPluginConfig]
}