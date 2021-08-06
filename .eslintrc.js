module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    `plugin:vue/vue3-recommended`,
    `@ntnyq`,
    `@vue/typescript/recommended`,
    `vue-global-api`,
  ],

  parserOptions: {
    ecmaVersion: 2020,
  },
}
