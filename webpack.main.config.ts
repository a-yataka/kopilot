import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/index.ts',
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
  // output: {
  //   // path: path.resolve(__dirname, 'dist'),
  //   // 画像などのアセット類は 'dist/assets' フォルダへ配置する
  //   assetModuleFilename: '[name][ext]',
  // },
};
