const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'awesome-validator.min': [path.resolve(__dirname, 'src/validator.ts')]
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            include: /\.min\.js$/,
        })
    ],
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/
        }]
    }
};
