/**
 * Created by Oleg on 16.12.2017.
 */

'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

//module.exports = [{},{}{}];

module.exports = {
    context: __dirname + '/frontend',
    entry: {
        home: "./home",
        about: "./about"
        //,common: ["./common", "./welcome"]
    },
    output: {
        path: __dirname + '/public',
        filename: '[name].js',
        library: '[name]'
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? "source-map" : null,

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: JSON.stringify('ru')
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            chunks: ['about','home']
        })

        //,new webpack.optimize.CommonsChunkPlugin({
        //    name: "common-goods",
        //    chunks: ['shop','order']
        //})
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
