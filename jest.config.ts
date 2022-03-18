export default {
  testEnvironment: 'node',
  clearMocks: false,
  collectCoverage: false,
  coverageProvider: 'v8',
  transform: { '.(ts|tsx)': 'ts-jest' },
  testMatch: ['**/tests/**/*.spec.(ts|js|tsx)'],
  testPathIgnorePatterns: ['/node_modules/'],
}
