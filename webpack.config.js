const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
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
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

    ]


}
  
  module.exports = (env, argv) => {
      console.log(argv.mode, env)
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

