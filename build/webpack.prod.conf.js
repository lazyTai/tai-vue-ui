var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path')
var configBase=require('./webpack.base.conf')
var commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'commons', // 这公共代码的chunk名为'commons'
    filename: '[name].bundle.js', // 生成后的文件名，虽说用了[name]，但实际上就是'commons.bundle.js'了
    minChunks: 4, // 设定要有4个chunk（即4个页面）加载的js模块才会被纳入公共代码。这数目自己考虑吧，我认为3-5比较合适。
});

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
let webpackConfig = {
    externals: {
        vue: "Vue"
    },
    entry: configBase.entry,
    output: configBase.output,
    resolve: {
        extensions: ['.js', '.vue', '.json', '.css'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    postcss: [
                        require('autoprefixer')({
                            browsers: ['iOS >= 7', 'Android >= 4.1']
                        })
                    ]
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('application/index/view'), ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            //     loader: 'url-loader',
            //     query: {
            //         limit: 10000,
            //         // name: utils.assetsPath('img/[name].[hash:7].[ext]')
            //     }
            // },
            // {
            //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            //     loader: 'url-loader',
            //     query: {
            //         limit: 10000,
            //         // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            //     }
            // }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }),
        commonsChunkPlugin,
        new ExtractTextPlugin({
            filename: '[name]/[name].css'
        }),
    ]
}

module.exports = webpackConfig;