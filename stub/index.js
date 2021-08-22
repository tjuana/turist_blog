const path = require('path')

const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const port = 1717
    // нужен json с контентом
const content = require('./content')
const imgContent = require('./img-responce')

const webpackConfig = require('../webpack-config')
// const { Router } = require('express')

express()
    .use('/img', express.static('./stub/img/'))
    .use(webpackDevMiddleware(webpack(webpackConfig)))

    // пример как картинки добавлять, надо сделать map
    .get(
        '/wp-json/wp/v2/media/11'
    , (req, res) => {
        setTimeout(() => {
            const ownContent = JSON.parse(JSON.stringify(imgContent))
            res.send(ownContent)
        }, 100)
    })
    .get(
        '/wp-json/wp/v2/turists'
    , (req, res) => {
        setTimeout(() => {
            const ownContent = JSON.parse(JSON.stringify(content))
            res.send(ownContent)
        }, 600)
    })
    // в процессе пока не уверен что нужно в stub
    // .use(
    //     'wp-json/jwt-auth/v1/token'
    // , (req, res) => {
    //     // res.set('Content-Type', 'application/json')
    //         res.send({
    //             response: {
    //                 // host: 'http://localhost:7321/wp-json/jwt-auth/v1/token',
    //                 status: {
    //                     code: 0
    //                 },
    //                 data: {
    //                     token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMCIsImlhdCI6MTYyNzIyMTU1OCwibmJmIjoxNjI3MjIxNTU4LCJleHAiOjE2Mjc4MjYzNTgsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.RWKEmbGNKEJWx1R0VHKhxqiXlYMESSnhmwwyVZm6Wfo",
    //                     user_email:"indianalovez777@gmail.com",
    //                     user_nicename:"johny",
    //                     user_display_name:"johny"
    //                 }

    //             }
    //     })
    // })
    .use('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'index.html'))
    })

    .listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}/`)
    })

