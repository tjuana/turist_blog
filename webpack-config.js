const path = require('path')

const cwd = process.cwd()

module.exports = {
    mode: 'production',
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
            },
            {
                test: /\.css$/,
                include: /[\\\/]node_modules[\\\/]@sbol[\\\/]lib\.ui[\\\/]core/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localsConvention: 'camelCase'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('postcss-import'),
                                require('postcss-for'),
                                require('postcss-custom-properties')({ preserve: false }),
                                require('postcss-custom-media')({ preserve: false }),
                                require('postcss-nested'),
                                require('postcss-color-function'),
                                require('autoprefixer')({
                                    overrideBrowserslist: ['last 2 versions', '> 1%', 'not ie < 11'],
                                    grid: true
                                }),
                                require('postcss-calc'),
                                require('postcss-discard-comments'),
                                require('cssnano')({ preset: 'default' })
                            ]
                        }
                    }
                ]
            }
        ]
    },

    context: cwd,

    output: {
        path: path.resolve(cwd, 'dist'),
        filename: 'index.js'
    },
}
