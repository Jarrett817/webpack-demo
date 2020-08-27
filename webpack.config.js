var path = require('path');

module.exports = {
  mode: 'development',
  entry:'./src/index.js',
  output:{
      filename:'[name].[content].js'
  }
};
