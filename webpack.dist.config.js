const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: [
        './src/index.js',
        './scss/index.scss'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'react-rayr-component.min.js',
        library: 'ReactRayrComponent',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    warnings: false,
                    output: {
                        comments: false,
                        beautify: false
                    },
                    compressor: {
                        sequences: true,
                        drop_debugger: true,
                        drop_console: true
                    }
                }
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', {discardComments: {removeAll: true}}],
                },
                canPrint: true
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'react-rayr-component.min.css'
        })
    ]
};
