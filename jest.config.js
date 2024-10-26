module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts', // Укажите файлы для сбора покрытия
    '!src/**/*.d.ts' // Исключите определенные файлы, если нужно
  ],
  coverageDirectory: 'test/coverage/all',
  coverageReporters: ['html', 'text'],

  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  moduleFileExtensions: ['js', 'ts']
};


