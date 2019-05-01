module.exports = {
  parser: "babel-eslint",
  extends: ['airbnb', 'plugin:react/recommended', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight', 'to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'react/forbid-prop-types': [
      2,
      {
        forbid: ['any'],
      },
    ],
    'jsx-a11y/label-has-associated-control': [0],
    'react/destructuring-assignment': [0],
    'react/button-has-type': [0],
    'import/no-cycle': [0],
    'react/no-access-state-in-setstate': [0],
    'react/default-props-match-prop-types': [0],
    "jsx-a11y/label-has-for": [ 2, {
      "components": [ "Label" ],
      "required": {
          "any": [ "nesting", "id" ]
      },
      "allowChildren": false
  }]
  },
};
