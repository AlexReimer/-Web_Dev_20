const path = require('path');

module.exports = {
   mode: 'development',
   // mode: 'production',
    entry: './src/js/index.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    },
};