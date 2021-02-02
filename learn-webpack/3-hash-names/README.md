# Хеши в именах файлов в `dist` и webpack плагины
Чтобы скрипты, имена которых включают в себя кеш и постоянно меняются, подключать к `index.html` не вручную, нужно использовать плагин `html-webpack-plugin`.

`npm i html-webpack-plugin`

В файл `webpack.config.js` добавляем строчки:
```
const HTMLWebpackPlugin = require('html-webpack-plugin');
// и
plugins: [
    new HTMLWebpackPlugin( { 
        template: './src/index.html' // Документ 'html', к которому мы плагин будет подключать скрипты.
    }),
]
``` 

> Параметр `template` задает html документ, в который будут добавляться скрипты. Лучше уточнить этот момент в документации.
html-webpack-plugin

Теперь при сборке проекта новые имена скриптов будут автоматически добавляться в теги `<script>` в `index.html`.


## Плагин, удаляющий старые версии скриптов из директории `dist`.

`clean-webpack-plugin` этим и занимается.

В файл `webpack.config.js` добавляем строчки:
```
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

plugins: [ // Список webpack плагины
    ...
    new CleanWebpackPlugin(), // Чистит папку 'dist'
]
```

