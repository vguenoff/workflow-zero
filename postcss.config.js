module.exports = {
  plugins: [
    require('postcss-fixes')(),
    require('autoprefixer')({ grid: true }),
  ],
};
