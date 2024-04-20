module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          __root: './',
          api: './src/api',
          assets: './src/assets',
          components: './src/components',
          cons: './src/cons',
          hoc: './src/hoc',
          hooks: './src/hooks',
          models: './src/models',
          navi: './src/navi',
          screens: './src/screens',
          store: './src/store',
          styles: './src/styles',
          types: './src/types',
          utils: './src/utils',
          lists: './src/lists',
          context: './src/context',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'NODE_ENV',
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
