const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

module.exports = {
    // Doc: https://webpack.js.org/configuration/#options
    mode: 'development',
    entry: './js/main.js',
    devtool: 'source-map',
    devServer: {
        // Doc: https://webpack.js.org/configuration/dev-server
        static: './dist',
    },
    plugins: [
        // Doc: https://github.com/jantimon/html-webpack-plugin
        new HtmlWebpackPlugin({ // Generate an HTML index to serve bundles and assets
            title: 'Kaboom',    // The generated HTML page title
            hash: true,         // Add a query param hash to files for cache busting
        }),
        // Doc: https://github.com/jharris4/html-webpack-tags-plugin
        new HtmlWebpackTagsPlugin({
            tags: [
                'stylesheets/main.css', // Include the copied CSS in the HTML head
            ],
        }),
        // https://github.com/webpack-contrib/copy-webpack-plugin
        new CopyPlugin({
            patterns: [
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
