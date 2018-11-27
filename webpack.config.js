const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/client/app.js',
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
            }
        ]
    },
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
