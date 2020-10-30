const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const sass = require('./webpack/sass');
const devserver = require('./webpack/devserver');
const extractCSS = require('./webpack/css.extract');
const fonts = require('./webpack/fonts');
const favicons = require('./webpack/favicons');
const images = require('./webpack/images')

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

function common(env) {
    return merge([
        {
        entry: {
            'index': PATHS.source + '/pages/index/index.js',
            'colors-type': PATHS.source + '/pages/colors-type/colors-type.js',
            'header': PATHS.source + '/pages/headers-footers/headers-footers.js',
            'form-elements': PATHS.source + '/pages/form-elements/form-elements.js',
            'cards': PATHS.source + '/pages/cards/cards.js',
            'landing': PATHS.source + '/pages/landing/landing.js',
            'registration': PATHS.source + '/pages/registration/registration.js',
            'sign-in': PATHS.source + '/pages/sign-in/sign-in.js',
            'room-details': PATHS.source + '/pages/room-details/room-details.js',
            'search-room': PATHS.source + '/pages/search-room/search-room.js',
        },
        output: {
            path: PATHS.build,
            filename: './assets/js/[name].js'
        },
        resolve: {
            alias: {
                images: path.resolve(__dirname, 'src/assets/img'),
                assets: path.resolve(__dirname, 'src/assets'),
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index'],
                template: PATHS.source + '/pages/index/index.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'colors-type.html',
                chunks: ['colors-type'],
                template: PATHS.source + '/pages/colors-type/colors-type.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'headers-footers.html',
                chunks: ['header'],
                template: PATHS.source + '/pages/headers-footers/headers-footers.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'form-elements.html',
                chunks: ['form-elements'],
                template: PATHS.source + '/pages/form-elements/form-elements.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'cards.html',
                chunks: ['cards'],
                template: PATHS.source + '/pages/cards/cards.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'landing.html',
                chunks: ['landing'],
                template: PATHS.source + '/pages/landing/landing.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'registration.html',
                chunks: ['registration'],
                template: PATHS.source + '/pages/registration/registration.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'sign-in.html',
                chunks: ['sign-in'],
                template: PATHS.source + '/pages/sign-in/sign-in.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'room-details.html',
                chunks: ['room-details'],
                template: PATHS.source + '/pages/room-details/room-details.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'search-room.html',
                chunks: ['search-room'],
                template: PATHS.source + '/pages/search-room/search-room.pug'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            }),
        ]
    },
    pug(),
    fonts(env, PATHS.source),
    favicons(env, PATHS.source),
    images(env)
])};

module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common(env),
            extractCSS()
        ])
    }
    if (env === 'development') {
        return merge([
            common(env),
            devserver(),
            sass()
        ])
    }
};
