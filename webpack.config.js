const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    // new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: 'public/index.html',
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      { test: /\.tsx?$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.(ts|tsx)$/, exclude: /node_modules/, use: 'ts-loader' },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|jpg|svg)$/, use: ['file-loader'] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.js'],
    modules: ['src', 'node_modules'],
  },
};
// https://generatewebpackconfig.netlify.app/
