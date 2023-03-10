const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // npm run build 타겟 디렉토리
  outputDir: '../voard-app/src/main/resources/static',
  //indexPath: "../voard-app/src/main/resources/static/index.html",

  // npm run serve 개발 진행시에 포트가 다르기때문에 프록시 설정
  devServer: {
    proxy: {
      '/api' : {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
      },
    }
  },

  transpileDependencies: [
    'vuetify'
  ],

  lintOnSave:false
})
