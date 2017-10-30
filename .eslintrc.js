module.exports = {
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
    worker: true
  },
  parser: 'babel-eslint',
  settings: {
    'import/parser': 'babel-eslint',
    'import/resolver': {
      webpack: {
        config: 'webpack.config.dev.js'
      }
    },
    'import/ignore': [
      'node_modules',
      '\.scss$'
    ]
  },
  rules: {
    'semi': [2, 'never'],
    'comma-dangle': [2, 'never'],
    'space-before-function-paren': [2, 'always'],
    'function-paren-newline': [0],
    'max-len': [2, 120, 2],
    'no-trailing-spaces': [2, { skipBlankLines: true }],
    'indent': [0],
    'new-cap': [2, {capIsNewExceptions: ['DOMtoCanvas']}],
    'no-console': [2, {allow: ['error', 'info']}],
    'no-unused-expressions': [2, { allowShortCircuit: true }],
    'react/prop-types': [2, {
      ignore: ['dispatch', 'children']
    }],
    'react/jsx-indent-props': [0],
    'react/jsx-closing-bracket-location': [0],
    'react/jsx-pascal-case': [0],
    'react/jsx-filename-extension': [0],

    // import errors
    'import/no-unresolved': 2,
    'import/named': 2,
    'import/default': 2,
    'import/namespace': 2,
    'import/export': 2,

    // import warnings
    'import/no-duplicates': 1
  },
  plugins: [
    'babel',
    'react',
    'import'
  ]

}
