module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'no-descending-specificity': null
  },
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-prettier', 'stylelint-config-recess-order']
}
