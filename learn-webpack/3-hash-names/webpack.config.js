const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/js/index.js',
        analytics: './src/js/analytics.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [ // Список webpack плагины
        new HTMLWebpackPlugin( { // Передаем необязательные опции
            template: './src/index.html' // Документ 'html', к которому мы плагин будет подключать скрипты.
        }), // Синтаксис должен быть именно таким
        new CleanWebpackPlugin(), // Чистит папку 'dist'
    ]
}