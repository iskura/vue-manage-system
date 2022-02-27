/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-03 14:29:58
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-01-18 19:21:34
 */
module.exports = {
  
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    open:true,
    https:false,
    proxy: {
      'api':{
        target:'http://localhost:8000',
        ws:true,
        changeOrigin:true,
        pathRewrite:{
          '^api':''
        }
      }
    }
  },
}