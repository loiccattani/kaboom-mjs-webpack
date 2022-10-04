const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');

module.exports = {
    // Doc: https://webpack.js.org/configuration/#options
    mode: 'production',
    entry: './js/main.js',
    plugins: [
        // https://github.com/webpack-contrib/copy-webpack-plugin
        new CopyPlugin({
            patterns: [
                '*.html',
                './stylesheets/*.css',
                './images/*',
                //'./sounds/*',
                //'./fonts/*',
            ],
        }),
    ],
    output: {
        filename: 'js/bundle.js', // The main output bundle filename
        clean: true,              // Clean the output directory
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
            new HtmlMinimizerPlugin()
        ],
    },
};
