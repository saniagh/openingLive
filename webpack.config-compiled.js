(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module', 'path'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, require('path'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.path);
        global.webpackConfig = mod.exports;
    }
})(this, function (module, path) {
    'use strict';

    //var webpack = require('webpack');

    var config = {
        // devtool: 'source-map',

        entry: {
            login: path.join(__dirname, 'src', 'entry', 'login.js'),
            register: path.join(__dirname, 'src', 'entry', 'register'),
            faqLogged: path.join(__dirname, 'src', 'entry', 'faqLogged'),
            faqNotLogged: path.join(__dirname, 'src', 'entry', 'faqNotLogged'),
            content: path.join(__dirname, 'src', 'entry', 'content'),
            index: path.join(__dirname, 'src', 'entry', 'index')
        },

        output: {
            path: path.join(__dirname, 'build'),
            filename: '[name].js',
            publicPath: '/'
        },

        /*
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compressor: {
                    warnings: false
                }
            })
        ],*/

        module: {
            loaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }]
        }
    };
    /*
     {
     test: /\.jsx?$/,
     exclude: /(node_modules|bower_components)/,
     loader: 'babel-loader',
    
     query: {
     presets: ['es2015', 'react']
     }
     }
     */

    module.exports = config;
});

//# sourceMappingURL=webpack.config-compiled.js.map