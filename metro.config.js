const path = require('node:path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
let config = {};
config = mergeConfig(getDefaultConfig(__dirname), config);

config.resolver = {
  ...config.resolver,
  extraNodeModules: {
    ...config.resolver.extraNodeModules,
    // 'react-native-node-api': path.resolve(
    //   __dirname,
    //   '../react-native-node-api-modules/packages/host',
    // ),
    'react-native-node-api': path.resolve(
      __dirname,
      './node_modules/react-native-node-api',
    ),
  },
};

config.watchFolders = [
  __dirname,
  path.resolve(__dirname, './node_modules'),
  path.resolve(__dirname, '../sum-lib'),
  path.resolve(__dirname, '../napi-ios'),
  path.resolve(__dirname, '../napi-ios/packages/macos'),
  // path.resolve(__dirname, '../react-native-node-api-modules'),
  // path.resolve(__dirname, '../react-native-node-api-modules/packages/host'),
];

module.exports = config;
