const collectCoverageFrom = ['src/**/*.js'];
const jest = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverageFrom,
};

module.exports = jest;
