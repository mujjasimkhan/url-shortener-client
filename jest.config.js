const {defaults} = require('jest-config');

const config = {
    verbose: true,
  };
  
  module.exports = config;
  
  // Or async function
  module.exports = async () => {
    return {
      verbose: true,
      moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx'],
      moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/js/url/component/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/src/js/url/component/__mocks__/styleMock.js"
      }
    };
  };