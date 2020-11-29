module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: './',
    },
    plugins: ['@typescript-eslint', 'import', 'filenames'],
    rules: {
        'react/prop-types': 'off',
        camelcase: 'off',
        '@typescript-eslint/camelcase': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false,
                varsIgnorePattern: '^_',
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
            { functions: false, classes: true, variables: true, typedefs: true },
        ],
        '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
        'react/display-name': 'off',
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
        '@typescript-eslint/no-useless-constructor': 'error',
        'import/no-default-export': 'error',
        'import/named': 'off',
        'import/order': ['error', { groups: ['external'], 'newlines-between': 'always' }],
        'import/first': 'error',
        // "react-hooks/exhaustive-deps": "warn"
        'no-console': ['error', { allow: ['warn', 'error'] }],
        // 'import/no-unresolved': 'off',
        // 'import/namespace': 'off',
        // 'import/default': 'off',
        'react/no-unescaped-entities': 'off',
        'import/no-named-as-default': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'filenames/match-regex': [2, '^[a-z0-9-.]+$', true],
    },
    overrides: [
        {
            // enable the rule specifically for TypeScript files
            files: ['*.ts', '*.tsx'],
            rules: {
                //   "@typescript-eslint/explicit-function-return-type": ["error", { "allowExpressions": true, "allowTypedFunctionExpressions": true, "allowHigherOrderFunctions": true }],
            },
        },
    ],
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        'import/resolver': {
            typescript: {},
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};