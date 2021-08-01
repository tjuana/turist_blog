const express = require('express')

const content = require('./content')

module.exports = express.Router()
    .post(
        '/wp-json/wp/v2/turists'
    , (req, res) => {
        console.log(req.body)
        setTimeout(() => {
            const ownContent = JSON.parse(JSON.stringify(content))
            res.send(ownContent)

        }, 1000)
    })