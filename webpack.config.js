const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');



const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist')
};

module.exports = {
    entry: {
        'index': PATHS.source + '/src/scripts/main.js',
    },
    output: {
        path: PATHS.build,
        filename: './js/[name].js'
    },
    plugins: [
        new StyleLintPlugin({
            configFile: './.stylelintrc'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new UglifyJSPlugin()        
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "eslint-loader",
                options: {
                    fix: true
                }            
            }                               
        ]
    }
};