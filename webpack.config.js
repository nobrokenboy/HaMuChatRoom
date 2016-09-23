/**
 * Created by jessic on 2016/9/22.
 */
var webpack=require("webpack");
var htmlWebpackPlugin=require("html-webpack-plugin");//第三方插件，将XX.tmpl.html生成html
var path=require("path");
//配置模块
module.exports={
    entry:__dirname+"/src/main.js",//唯一的入口文件
    output:{
        path:__dirname+'/dist',//打包之后文件存放的目录
/*        publicPath:'/dist/',//网站运行时的访问路径。配置这个根目录会从这里开始*/
        filename:"build.js"//打包输入对应的文件名字
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名
        alias: {
            components: path.join(__dirname, './src/components')
        }
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    // webpack-dev-server配置
    devServer: {
        /*contentBase:"./public",*///本地服务器所加载的页面所在的目录
        colors:true,//终端中输出结果为彩色
        historyApiFallback:true,//不跳转
        inline:true,//实时刷新
        hot:true,//这个参数是hotModuleReplacement插件的，以上是webpack-dev-server的
        noInfo: true
    },
    devtool:"#eval-source-map",//配置生成source Maps
    plugins:[
        new htmlWebpackPlugin({
            template:__dirname+"/src/index.tmpl.html"
        }),
        new webpack.BannerPlugin("this the output of HaMuChatRoom!")
    ],
    module:{
        loaders:[
            {
                test:/\.vue$/,
                loader:"vue"
            },
            {
                test:/\.json$/,
                loader:"json"
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel"
            },
            {
                test:/\.css$/,
                loader:"style!css?modules！postcss"//感叹号的功能在于让同一文件使用不同类型的loader，“？module只适合当前模块的样式”
            },
            {
                test:/\.sass$/,
                loader: 'vue-style-loader!css-loader!style-loader!sass-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    postcss:[
        require('autoprefixer')//可以自动调用不同浏览器的前缀
    ]



}