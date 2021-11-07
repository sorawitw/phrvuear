module.exports = {
  devServer: {
    https: true,
    port: 8080,
    host: "localhost",
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/phrvuear/'
  : '/'
};
