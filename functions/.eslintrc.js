module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    "quotes": ["error", "double"],
    "linebreak-style": 0,
    "indent": 0,
    "object-curly-spacing": 0,
    "max-len": ["error", { "code": 1000 }],
    "space-before-function-paren": ["error", "always"],
  },
};
