const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(env, source){
    isDev = env === 'development'
    const favicons = path.join(source, 'assets/favicons')
    return {
        module: {
            rules: [
                {
                    test: /\.(ico|png|svg|webmanifest|xml)$/,
                    loader: 'file-loader',
                    include: [favicons],
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/assets/favicons/',
                        publicPath: isDev ? '/assets/favicons/' : '/toxin/build/assets/favicons/'
                    },
                },
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: 'src/assets/favicons',
                    to: './assets/favicons'
                },
            ]),
        ]
    }
};