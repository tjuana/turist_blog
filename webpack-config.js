const path = require('path')

const cwd = process.cwd()

module.exports = {
    mode: 'development',
    entry: 'src/index.jsx',

    resolve: {
        extensions: ['.jsx', '.js'],
        modules: [cwd, 'node_modules']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options:  {
                    babelrc: true,
                    cacheDirectory: true,
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                modules: false,
                                targets: {
                                    browsers: ['last 2 versions', '> 1%', 'not ie < 11']
                                }
                            }
                        ],
                        '@babel/preset-react'
                    ]
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
                options: {
                    removeTags: true,
                    removingTags: ['title', 'desc'],
                    removeSVGTagAttrs: false
                }
            },
            {
                test: /\.css$/,
                exclude: /[\\\/]node_modules[\\\/]@sbol[\\\/]lib\.ui[\\\/]core/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                // Включить этот лоадер, чтобы убедиться, что работает разделение процессинга стилей
                                // require('postcss-nested'),
                                require('autoprefixer')({
                                    overrideBrowserslist: ['last 2 versions', '> 1%', 'not ie < 11'],
                                    grid: true
                                })
                            ]
                        }
                    }
                ]
            }
        ]
    },
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 9000,
    // },
    context: cwd,

    output: {
        path: path.resolve(cwd, 'dist'),
        filename: 'index.js'
    },
}
