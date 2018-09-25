'use strict';

const webpack = require('webpack');
const path = require('path');

const bundleFolder = "./wwwroot/scripts/";
const srcFolder = "./Scripts/"

module.exports = {
    entry: [
        srcFolder + "main.js"
    ],
    devtool: "source-map",
    output: {
        filename: "bundle.js",
        publicPath: 'scripts/',
        path: path.resolve(__dirname, bundleFolder)
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["stage-3"]
                }
            }
        ]
    },
    plugins: [
    ]
};