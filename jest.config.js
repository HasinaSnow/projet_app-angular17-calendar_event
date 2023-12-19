// jest.config.js
module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
    automock: false,
    setupFiles: [
      "./setupJest.js"
    ],
    testPathIgnorePatterns: [
      "<rootDir>/node_modules/",
      "<rootDir>/dist"
    ]
  };