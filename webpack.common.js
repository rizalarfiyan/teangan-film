const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const path = require("path");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(png|jpe?g|jpg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new FaviconsWebpackPlugin({
            logo: './src/icon/icon.png',
            mode: 'webapp',
            devMode: 'webapp',
            favicons: {
                appName: 'Teangan Film',
                appDescription: 'Teangan Film adalah aplikasi bla bla bla',
                developerName: 'Rizal Arfiyan',
                developerURL: 'https://github.com/rizalarfiyan/',
                background: '#FFFFFF',
                theme_color: '#F25F5C',
                display: "standalone",
                icons: {
                    android: true,
                    appleIcon: true,
                    favicons: true,
                    coast: false,
                    appleStartup: false,
                    firefox: true,
                    windows: true,
                    yandex: false
                }
            }
        })
    ]
}