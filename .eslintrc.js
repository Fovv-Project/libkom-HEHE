module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:react/recommended"
  ],
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "semi": ["error", "always"], // semicolon
    "quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": true }], // double quotes
    "indent": ["error", 2], // 2 spaces
    "no-trailing-spaces": "error", // no trailing spaces
    "react/prop-types": "off", // no prop-types
  },
};
