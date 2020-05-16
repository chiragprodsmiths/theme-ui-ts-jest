module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/public/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.test.json',
    },
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
