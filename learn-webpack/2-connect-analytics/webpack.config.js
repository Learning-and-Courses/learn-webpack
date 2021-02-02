const path = require('path'); // Какая-то дополнительная штука от node.js для правильной работы с путями к папкам и файлам.

module.exports = {  // webpack будет парсить этот объект.
    mode: 'development', //  или 'production', который минифицирует код js помимо сборки.
    entry: { // Если указать только путь к 'index.js', то 'analytics.js' не будет добавлен к проекту.
        main: './src/js/index.js',
        analytics: './src/js/analytics.js' // Аналитика, она не импортируется в главной точке входа - 'index.js'
    }, // Указание webpack, что начать сборку нужно с этого файла.
    output: {  // Указание webpack, куда складывать результат его работы.
        filename: '[name].bundle.js', // Указание webpack файла, куда попадет весь js код. Паттерн '[name]' указывает на имя ключа 'entry'. В случае с 'index.js' он примет значение 'main', в случае с 'analytics.js' - 'analytics'.
        path: path.resolve(__dirname, 'dist') // Указание webpack директорию, куда нужно складывать результат его работы.
    }
}