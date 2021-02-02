# Добавить в `dist` аналитику ( `analytics.js` )
1. Изменяем содержимое `entry` файла `webpack.config.js` на:
    ```
    entry: {
        main: './src/js/index.js',
        analytics: './src/js/analytics.js'
    }, 
    ```
2. Изменяем содержимое `output` файла `webpack.config.js` на:
    ```
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
    ```

    > В `dist` появятся 2 директории: `main.bundle.js` и `analytics.bundle.js`.
3. В `index.html` изменяем строки `<script>` на:
    ```
    <script src="main.bundle.js"></script>
    <script src="analytics.bundle.js"></script>
    ```
   
Файл `analytics.js` успешно подключен к `index.html` и работает в браузере.