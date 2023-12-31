module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            src: './src',
            components: './src/components',
          },
        },
      ],
      '@babel/plugin-transform-react-jsx',
      ['nativewind/babel'],
      [
        'react-native-reanimated/plugin',
        {
          relativeSourceLocation: true,
        },
      ],
    ],
  };
};
