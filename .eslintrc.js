module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:nuxt/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 13,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint', '@typescript-eslint/eslint-plugin'],
    rules: {},
};
