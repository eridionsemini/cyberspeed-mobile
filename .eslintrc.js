module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['simple-import-sort', 'react-hooks', 'prettier'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^(react$|react-native$)'],
          ['^\\u0000'],
          ['^@?\\w'],
          ['^(root|context|hoc|hooks|models|screens|types|utils|store|lists|navi|firebase)(/.*|$)'],
          ['^(components)(/.*|$)'],
          ['^(apollo)(/.*|$)'],
          ['^(constants|general-types)(/.*|$)'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^(styles)(/.*|$)'],
          ['^(assets)(/.*|$)'],
          ['^\\u0000'],
        ],
      },
    ],
    'sort-imports': 'off',
  },
};
