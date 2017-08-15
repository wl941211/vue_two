//webpack配置文件 是用来打包的 把打包后的文件 按照这个文件的配置文件来进行编译

//是一个Node文件 要使用Node的相关语法

//node的内置模块 直接引入
const path=require('path');
// 这个插件需要我们创建实例来使用，所以必须导入进来
const htmlWebpackPlugin = require('html-webpack-plugin');

//导出一个配置对象 webpack在启动时会根据配置的内容来打包
module.exports={
    //打包的入口文件
    entry:"./src/js/main.js",
    //打包后输出的文件位置和文件名
    output:{
        path: path.resolve(__dirname , './dist'),
        filename: 'build.js'
    },

    //因为webpack默认只打包js文件 ---都是转成Js格式再来打包 所以要打包css,html,img等其他文件 就要用到插件
    
    //额外文件的处理配置
      //自动把构建好的Js文件 导入到html中
    plugin:[
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            inject:'body'
        })
    ],
    module:{
        rules:[
            //css打包模块
            {
              test:/\.css$/,
              use:[
                  'style-loader',
                  'css-loader'
              ]
            },
            //less模块
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                     'css-loader' ,
                     'less-loader'
                ]
            },
             //sass模块
            {
                test:/\.(sass|scss)$/,
                use:[
                    'style-loader',
                     'css-loader' ,
                     'less-loader'
                ]
            },
            //html模版
            {
                test:'/\.tpl$/',
                use:[
                    'html-loader'
                ]
            },
            //图片压缩打包 
            {
                test:'/\.(jpg|png|gif|ttf)$/',
                use:[
                  { loader: 'url-loader', options: { limit: 10000 } }  
                ]
            },
            //转换语法为es5
            {
              test:'/\.js$/',
              exclude: /node_modules/,
              use:[
                  {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015'],
                            plugins: ['transform-runtime']
                        },
                        
                    }
              ]
            },
             // 配置vue文件的解析转换
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            }
        ]
    }
};