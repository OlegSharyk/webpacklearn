/**
 * Created by Oleg on 16.12.2017.
 */

'use strict';

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

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    plugins: [
        new webpack.ProvidePlugin({
            find: 'lodash/collection/find'
        })
    ]
};

