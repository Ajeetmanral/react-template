// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  //`plugin:react/recommended` for stricter rules.
  extends: [
    "plugin:react/recommended",
    'airbnb-base'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      },
    }
  },
  // add your custom rules here
  rules: {
    // don't show this is unsed error for mentioned methods in a class
    'class-methods-use-this': ['error', {
      "exceptMethods": ['render', 'componentWillMount', 'componentDidMount']
    }],
    // don't show no unsed vars for variables starting with _
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    // don't require .jsx extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
