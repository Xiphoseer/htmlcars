module.exports = {
  baseUrl: '/htmlcars/',
  outputDir: 'docs',
  assetsDir: 'assets',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/sass/lcars.scss";'
      }
    }
  }
}
