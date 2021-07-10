const path = require('path')

const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const port = 7321
    // нужен json с контентом
    // const content = require('./content')

const webpackConfig = require('../webpack-config')

express()
    .use('/img', express.static('./stub/img/'))

.use(webpackDevMiddleware(webpack(webpackConfig)))
    .use('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'index.html'))
    })
    .listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}/`)
    })