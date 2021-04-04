const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.ts'],
  },
  node: {
    fs: 'empty',
  },
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './public',
    inline: true,
    host: 'localhost',
    port: 3000,
    stats: 'errors-only',
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      // 해시 값을 추가 해 캐싱 되지 않도록 함
    }),
    new MiniCssExtractPlugin(),
  ],
}
