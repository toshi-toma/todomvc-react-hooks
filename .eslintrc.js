module.exports = {
  "extends": ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  "env": {
    "browser": true
  },
  "rules": {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": ["warn", {
      extensions: [".js", ".jsx"]
    }],
  },
}