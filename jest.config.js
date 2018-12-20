const collectCoverageFrom = ['src/**/*.js'];
const jest = {
  setupTestFrameworkScriptFile: './jest.setup.js',
  collectCoverageFrom,
};

module.exports = jest;
