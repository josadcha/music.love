module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^@src(.*)$': '<rootDir>/src$1'
    }
};