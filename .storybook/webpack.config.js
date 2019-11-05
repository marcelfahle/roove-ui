const path = require('path');
const SRC_PATH = path.join(__dirname, '../src/components');
//dont need stories path if you have your stories inside your //components folder
module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      include: [SRC_PATH],
      use: [
        {
          loader: require.resolve('babel-loader'),
        },
        {
          loader: require.resolve('awesome-typescript-loader'),
        },
        { loader: require.resolve('react-docgen-typescript-loader') },
      ],
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
        'sass-loader',
      ],
    }
  );
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
