const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(env, source){
    isDev = env === 'development'
    const fonts = path.join(source, 'assets/fonts')
    return {
        module: {
            rules: [
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader',
                    include: [fonts],
                    options: {
                      name: '[name].[ext]',
                      outputPath: '/assets/fonts/',
                      publicPath: isDev ? '/assets/fonts/' : '/toxin/build/assets/fonts/'
                    }
                },
            ]
        },
        plugins: [
            new CopyWebpackPlugin([{
                from: `src/assets/fonts`,
                to: `./assets/fonts`
            }]),
            new CopyWebpackPlugin([{
                from: `src/assets/scss`,
                to: `./assets/fonts`
            }])
        ]
    }
}