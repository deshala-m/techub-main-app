module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "no-unused-vars": ["warn", {argsIgnorePattern: "^_"}],
        "no-console": "warn",
    },
    reportUnusedDisableDirectives: true,
};
