module.exports = {
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import"
  ],
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "env": {
    "development": {
      "plugins": [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import"
      ],
      "presets": ["@babel/preset-env", "@babel/preset-react"]
    },
    "test": {
      "plugins": [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import"
      ],
      "presets": ["@babel/preset-env", "@babel/preset-react"]
    },
    "production": {
      "plugins": [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import"
      ],
      "presets": ["@babel/preset-env", "@babel/preset-react"]
    }
  }
};
