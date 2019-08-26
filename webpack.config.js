const HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
    entry: ['@babel/polyfill','./src/index.js'],
    output: {
        filename: 'app.budle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /locales/,
                loader: '@alienfast/i18next-loader',
                // options here
                //query: { overrides: [ '../node_modules/lib/locales' ] }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

    ]


}
  
  module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.mode = 'development'
        return config
    }
  
    if (argv.mode === 'production') {
      config.mode = 'production'
      return config
    }
  
    return config;
  };