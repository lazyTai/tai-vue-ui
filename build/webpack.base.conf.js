var path = require('path')

module.exports = {
    entry: {
        tv:path.resolve(__dirname,
            '../application/index/view/components/tai.js'),
        index: path.resolve(__dirname,
            '../application/index/view/index/index.js'),

    },
    output: {
        path: path.resolve(__dirname, '../public/static/js/'),
        filename: '[name]/[name].js',
        publicPath: 'public/static/js/',
    }
}