const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
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
    devtool: false,
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: 'awesome-typescript-loader'
            }],
            exclude: /node_modules/
        }]
    },
    node: {
        fs: 'empty'
    }
};
