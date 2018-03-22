var webpack = require('webpack')
var webpackConfig_dev = require('./build/webpack.dev.conf')
var webpackConfig_build = require('./build/webpack.prod.conf')
var gulp = require("gulp");

gulp.task("gulp-dev-js", function (callback) {
    webpack(webpackConfig_dev).watch(200, function (err, stats) {
        if (err) throw err
        process.stdout.write(
            stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            })
        )
        callback();
    })
});

gulp.task("gulp-build-js", function (callback) {
    webpack(webpackConfig_build).watch(200, function (err, stats) {
        if (err) throw err
        process.stdout.write(
            stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            })
        )
        callback();
    })
});

gulp.task('watch', function (done) {
    gulp.watch('application/view/**/*', ['gulp-dev-js'])
        .on('end', done);
});

gulp.task('build', ['gulp-build-js']);
gulp.task('dev', ['gulp-dev-js', 'watch']);