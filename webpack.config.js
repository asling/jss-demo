const path = require("path");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.jss$/,
    //             loader: 
    //         }
    //     ]
    // },
    devServer: {
        contentBase: path.resolve(__dirname),
        compress: true,
        port: 4321
    }
}