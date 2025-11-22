// jest.config.js

/** @type {import('ts-jest').JestConfigType} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '^.+\.tsx?$': 'ts-jest',
  },
  // Add any other configuration options you need
};