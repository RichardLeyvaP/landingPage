module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api2.simplifies.cl',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};