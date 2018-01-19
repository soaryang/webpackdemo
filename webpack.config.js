var path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        main:'./src/script/main.js',
        a:'./src/script/a.js',
        b:'./src/script/b.js',
        c:'./src/script/c.js',
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[chunkhash].bundle.js',
        publicPath:'http://www.yangtengfei.cn/static/'
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'main.html',
            template:'index.html',
            inject:false,
            title:'webpack is good',
            chunks: ['main','a','b','c']
            /*, minify:{
                removeComments:true,
                collapseWhitespace:true
            }*/
        }),
        new htmlWebpackPlugin({
            filename:'a.html',
            template:'index.html',
            inject:false,
            title:'webpack is good',
            chunks: ['main','a']
            /*, minify:{
                removeComments:true,
                collapseWhitespace:true
            }*/
        }),
        new htmlWebpackPlugin({
            filename:'b.html',
            template:'index.html',
            inject:false,
            title:'webpack is good',
            chunks: ['main','b']
            /*, minify:{
                removeComments:true,
                collapseWhitespace:true
            }*/
        }),
        new htmlWebpackPlugin({
            filename:'c.html',
            template:'index.html',
            inject:false,
            title:'webpack is good',
            chunks: ['main','c']
            /*, minify:{
                removeComments:true,
                collapseWhitespace:true
            }*/
        })
    ]
};