import jsdoc from 'eslint-plugin-jsdoc';

export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            jsdoc,
        },
        rules: {
            // 'jsdoc/check-param-names': 'error',
            // 'jsdoc/check-types': 'error',
            // 'jsdoc/require-param-type': 'error',
            // 'jsdoc/require-returns-type': 'error',
            // 'jsdoc/check-param-names': 'error',
            // 'jsdoc/check-types': 'error',
            // 'jsdoc/require-param': 'error',
            // 'jsdoc/require-param-type': 'error',
            // 'jsdoc/require-returns': 'error',
            // 'jsdoc/require-returns-type': 'error',
        },
    },
];
