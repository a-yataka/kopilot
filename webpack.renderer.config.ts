import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
},
{
  // 画像やフォントなどのアセット類
  // test: /\.(ico|png|svg|eot|woff?2?)$/,
  test: /\.(ico|png|svg|jpg)$/,
  /**
   * アセット類も同様に asset/inline は使用しない
   * なお、webpack@5.x では file-loader or url-loader は不要になった
   */
  type: 'asset/resource',
},
);

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
