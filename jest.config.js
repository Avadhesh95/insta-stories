module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy', // Mock CSS imports
        '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js', // Mock image imports
    },
    transformIgnorePatterns: ['/node_modules/(?!some-es-module)'], // Allow some modules to be transpiled if needed
};

