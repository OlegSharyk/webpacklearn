/**
 * Created by Oleg on 16.12.2017.
 */

'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    context: __dirname + '/frontend',

    entry: {
        app: "./app"
    },

    output: {
        path: __dirname + '/public/js',
        publicPath:'/js/',
        filename: '[name].js'
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    },

    resolve: {
        modules: ["node_modules"],
        extensions:['.js']
    },

    resolveLoader: {
        modules: [ 'node_modules' ],
        extensions: [ '.js', '.json' ],
        mainFields: [ 'loader', 'main' ]
    }
};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}
