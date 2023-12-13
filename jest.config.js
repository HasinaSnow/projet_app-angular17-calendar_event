// jest.config.js
module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
    testPathIgnorePatterns: [
      "<rootDir>/node_modules/",
      "<rootDir>/dist"
    ]
  };