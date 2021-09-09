module.exports = {
  setupFiles: [
    './jest.setup.js',
  ],
  testPathIgnorePatterns: [
    './.next',
    './node_modules',
  ],
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
  },
};
