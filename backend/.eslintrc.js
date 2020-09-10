module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': ['off', 2],
    "linebreak-style": [0 ,"error", "windows"],
    "max-len" : ["error", {code : 300}] ,
    "no-lonely-if":"off" ,
    "no-underscore-dangle":"off",
    "no-alert":"off"
  },
};
