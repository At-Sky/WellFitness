const { inDev } = require('./webpack.helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    // Typescript loader
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    // CSS Loader
    test: /\.css$/,
    use: [
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
    ],
  },
  {
    // SCSS (SASS) Loader
    test: /\.s[ac]ss$/i,
    exclude: /\.module.(s(a|c)ss)$/,
    use: [
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
      { loader: 'sass-loader' },
    ],
  },
  {
    // SCSS (SASS) Loader
    test: /\.module.(s(a|c)ss)$/,
    use: [
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  },
  {
    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
    type: 'asset',
    generator: {
      filename: 'assets/[hash][ext][query]',
    },
  },
];
