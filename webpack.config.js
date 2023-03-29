const HTMLPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const ExtensionReloader = require('webpack-extension-reloader');
const ManifestVersionSyncPlugin = require('webpack-manifest-version-sync-plugin');

module.exports = {
  entry: {
    options: './src/options.tsx',
    popup: './src/popup.tsx',
    content: './src/content.tsx',
    background: './src/background.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLPlugin({
      chunks: ['options'],
      filename: 'options.html',
      title: 'Options page title',
    }),
    new HTMLPlugin({
      chunks: ['popup'],
      filename: 'popup.html',
    }),
    new CopyPlugin([
      { from: './src/_locales/', to: './_locales' },
      { from: './src/assets', to: './assets' },
      { from: './src/manifest.json', to: './manifest.json' },
    ]),
    new ExtensionReloader({
      manifest: path.resolve(__dirname, './src/manifest.json'),
    }),
    new ManifestVersionSyncPlugin(),
  ],
  mode: 'production',
  stats: 'minimal',
};
