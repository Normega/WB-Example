module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'standard'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4],
        'comma-dangle': ['error', 'always-multiline'],
        'space-before-function-paren': ['error', 'never'],
        'react/prop-types': 'off',
    },
};
