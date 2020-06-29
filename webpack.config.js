module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            //  $ significa o final  / / barra no inicio e no final significa regex e \ barra a esquerda significa scape de caracter que significa todos arquivos.js
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
};