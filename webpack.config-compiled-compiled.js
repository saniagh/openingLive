'use strict';

var path = require('path');
var webpack = require('webpack');

var config = {
    devtool: 'source-map',

    entry: {
        login: path.join(__dirname, 'src', 'entry', 'login.js'),
        register: path.join(__dirname, 'src', 'entry', 'register'),
        faqLogged: path.join(__dirname, 'src', 'entry', 'faqLogged'),
        faqNotLogged: path.join(__dirname, 'src', 'entry', 'faqNotLogged'),
        content: path.join(__dirname, 'src', 'entry', 'content')
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/'
    },

    devServer: {
        inline: true,
        port: 80
    },
    plugins: [new webpack.optimize.OccurenceOrderPlugin(), new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }), new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        }
    })],

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',

            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};

module.exports = config;

//# sourceMappingURL=webpack.config-compiled.js.map

//# sourceMappingURL=webpack.config-compiled-compiled.js.map