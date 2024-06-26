const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: './src/index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [new HtmlWebpackPlugin({ title: "My Webpack App", template: './src/index.html', }), new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' })],
    devServer: {
        watchFiles: ["src/**/*.js", "src/**/*.html", "src/**/*.scss"],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ['file-loader']
            }
        ],
    }
};