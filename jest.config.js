const collectCoverageFrom = ['src/**/*.js'];
const jest = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverageFrom,
  moduleDirectories: ['node_modules', 'src'],
};

module.exports = jest;
