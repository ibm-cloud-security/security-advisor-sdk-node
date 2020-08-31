module.exports = {
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  rules: {
    'no-console': 'off',
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    'no-unused-vars': ['error', { varsIgnorePattern: 'requiredParams|accountId' }],
  },
};
