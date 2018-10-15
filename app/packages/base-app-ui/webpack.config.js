const mode = process.env.MODE || 'production';
module.exports = require(`./config/webpack.${mode}.js`);
