module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '\\.test\\.ts$',
  moduleFileExtensions: ['ts', 'js'],
  globals: {
    'ts-jest': {
      __DEV__: true,
      __RCTProfileIsProfiling: false,
      enableTsDiagnostics: true,
    },
  },
  setupFilesAfterEnv: ['./jest.config.js'],
}
