module.exports = {
  verbose: true,
  testEnvironment: 'node',
  collectCoverage: false,
  coverageProvider: 'v8',
  collectCoverageFrom: ['src/**/*.ts'],
  transform: { '.(ts|tsx)': 'ts-jest' },
  testMatch: ['**/tests/**/*.spec.(ts|js|tsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
}
