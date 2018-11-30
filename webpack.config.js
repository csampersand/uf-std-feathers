const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: ['./src/client/app.js'],
    // watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [
                    /node_modules(\/|\\)(?!(@feathersjs|debug))/
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    node: {
        net: 'empty',
        tls: 'empty',
        fs: 'empty'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};
