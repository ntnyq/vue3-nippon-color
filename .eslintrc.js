module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'goy',
    '@vue/typescript/recommended',
  ],

  parserOptions: {
    ecmaVersion: 2020,
  },

  rules: {},

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],

      env: {
        jest: true,
      },
    },
  ],
}
