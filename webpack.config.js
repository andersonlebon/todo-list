module.exports = {
  mode: 'production',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['sass-loader', 'csss-loader', 'style-loader'],
      },
    ],
  },
};
