const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(env){
    isDev = env === 'development'
    return {
        module: {
            rules: [
                {
                    test: /\.(jpg|png|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/assets/images/',
                        publicPath: isDev ? 'src/assets/images/' : '/toxin/build/assets/images/'
                    },
                },
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: 'src/assets/img',
                    to: './assets/images'
                },
            ]),
        ]
    }
};
