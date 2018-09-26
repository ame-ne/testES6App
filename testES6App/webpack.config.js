'use strict';

const path = require('path');

const bundleFolder = "./wwwroot/scripts/";
const srcFolder = "./Scripts/";

module.exports = {
    entry: [
        "@babel/polyfill",
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
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: ['@babel/preset-env']
                    }
                }],
            }, 
            {
                test: /\.css$/,
                loader: "style-loader!css-loader" 
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
    ]
};