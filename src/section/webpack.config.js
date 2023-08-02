// webpack.config.js
const path = require('path');

module.exports = {
  // Your other webpack configuration options...

  resolve: {
    fallback: {
      "assert": require.resolve("assert/"),
    },
  },
};
