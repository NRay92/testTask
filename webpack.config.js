const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PAGES_DIR = `src/pug/pages/`;


module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    }, {
                        loader: 'postcss-loader',
                        options: {sourceMap: true, config: {path: 'src/js/postcss.config.js'}}
                    }, {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    }, {
                        loader: 'postcss-loader',
                        options: {sourceMap: true, config: {path: 'src/js/postcss.config.js'}}
                    }
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 9000,
            files: ['./dist/*.html'],
            server: {baseDir: ['dist']}
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/index.pug`,
            filename: './index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: "css/style.css",
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/img', to: 'img' },
                // { from: 'other', to: 'public' },
            ],
        }),
    ],

};