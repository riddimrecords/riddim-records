module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-dynamic-require": 0,
    "global-require": 0,
    "jsx-a11y/label-has-for": [ 2, {
      "components": [ "label" ],
      "required": {
          "some": [ "nesting", "id" ]
      },
      "allowChildren": false,
    }],
    "jsx-a11y/label-has-associated-control": [ 2, {
      "labelComponents": ["label"],
      "labelAttributes": ["htmlFor"],
      "controlComponents": ["input"]
    }]
  },
};
