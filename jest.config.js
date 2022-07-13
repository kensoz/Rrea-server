module.exports = {
  verbose: true,
  testEnvironment: 'node',
  collectCoverage: false,
  coverageProvider: 'v8',
  collectCoverageFrom: ['src/**/*.ts'],
  transform: { '.(ts|tsx)': 'ts-jest' },
  testMatch: ['**/tests/**/*.spec.(ts|js|tsx)'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/logs/',
    '<rootDir>/docs/',
    '<rootDir>/docker/',
    '<rootDir>/src/types/',
  ],
}
