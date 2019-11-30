module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["standard", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": ["off"],
    "implicit-arrow-linebreak": 0,
    "no-undef": ["error"],
    "function-paren-newline": 0,
    semi: ["error", "never"],
    "spaced-comment": 0,
    "comma-dangle": ["error", "never"],
    "react/prop-types": 0,
    "no-extra-boolean-cast": 0,
    "quote-props": 0,
    "object-curly-spacing": ["error", "always"],
    camelcase: 0,
    "no-nested-ternary": 0,
    "react/jsx-wrap-multilines": 0,
    "object-curly-newline": 0,
    "operator-linebreak": 0,
    "no-unused-expressions": 0,
    "global-require": 0,
    "max-len": 0,
    "import/no-cycle": 0,
    "no-underscore-dangle": 0,
    "no-return-assign": 0,
    "import/prefer-default-export": 0,
    "jsx-quotes": ["error", "prefer-double"],
    "no-console": "error",
    "arrow-parens": 0,
    "eol-last": 0,
    "consistent-return": 0
  }
}
