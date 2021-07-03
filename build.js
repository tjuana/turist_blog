const webpack = require('webpack')

const webpackConfig = require('./webpack-config')

webpack(webpackConfig, (error, stats) => {
    if (error) {
        throw error
    }
    console.log(
        `Output:\n${stats.toString({
            chunks: false
        })}`
    )
})