module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:nuxt/recommended',
        'prettier',

        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        ecmaVersion: 13,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint', '@typescript-eslint/eslint-plugin'],
    rules: {},
};
