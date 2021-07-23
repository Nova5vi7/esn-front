module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['simple-import-sort', 'react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:security/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    'no-case-declarations': 'off',
    'no-console': 'off',
    'react/prop-types': 'off',
    'simple-import-sort/imports': 'off',
    'simple-import-sort/exports': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prefer-module': 'off',
    'sonarjs/no-small-switch': 'off',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/prefer-ternary': 'off',
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'unicorn/no-null': 'off'
  }
};
