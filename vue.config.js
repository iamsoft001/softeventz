module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost/softapi",
        changeOrigin: true,
      },
    },
  },
};
