var webpack =require('webpack');
var buildconfig=require('./webpack.prod.conf.js')
webpack(buildconfig, function (err, stats) {
    if (err) throw err;
    process.stdout.write(
        stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        })
    )
})