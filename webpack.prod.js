const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // if production, website ke hisab se, else comments wagerah ke sath apne hisab se
  mode: 'development',
});