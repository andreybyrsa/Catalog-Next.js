import {path} from 'path'

const resolvePath = (currentPath) => path.resolve(__dirname, currentPath)

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "eslint-plugin-react",
    "eslint-plugin-import",
    "eslint-plugin-prettier",
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@Assets", resolvePath("public/")],
          ["@App", resolvePath("src/app/")],
          ["@Components", resolvePath("src/components/")],
          ["@Services", resolvePath("src/services")],
          ["@Store", resolvePath("src/store/")],
        ],
        extensions: [".ts", ".tsx", ".json"],
      },
    },
  },
  rules: {
    "react/prop-types": "off",
    "prefer-arrow-callback": "off",

    "import/no-extraneous-dependencies": "off",
    "no-param-reassign": ["error", { props: false }],
  },
};
