/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg|png)$": "<rootDir>/src/__mocks__/fileMock.js",
    "^@clerk/clerk-react$": "<rootDir>/src/__mocks__/clerk-react.js"
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/src/__tests__/utils/"],
};
