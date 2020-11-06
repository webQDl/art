const url = 'http://192.168.0.6:9999/';
let publicPath = './'

module.exports = {
  publicPath:publicPath,//根路径
  lintOnSave: true,
  productionSourceMap: false,
  outputDir:'dist',//打包的时候生成的一个文件名
  css: {
    // 忽略 CSS order 顺序警告
    extract: { ignoreOrder: true }
  },
  devServer:{
    open:true,//启动项目后自动开启浏览器
    proxy:{
      //配置跨域
      '/api':{//配置跨域的名字
        target: url,//跨域的地址
        changOrigin: true,//是否跨域
        ws: true,
        pathRewrite: {
        '^/api': ''  
        }
      }
    }
  }
}
