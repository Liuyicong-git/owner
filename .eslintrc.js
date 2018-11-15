module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
     sourceType: 'module'
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    extends: 'eslint:recommended',
    // required to lint *.vue files
    plugins: [
      'html'
    ],
    // check if imports actually resolve
    'settings': {
      'import/resolver': {
        'webpack': {
          'config': 'build/webpack.base.conf.js'
        }
      }
    },
    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue
    'rules': {
      // allow async-await
      'no-console': 'off',
      'indent':["error", 2, { "SwitchCase": 1 }],
      'semi':["error","always"],
      'space-before-function-paren': ["error",{"anonymous": "always", "named": "never"}],
      'generator-star-spacing': 'off',
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
  };
  
  