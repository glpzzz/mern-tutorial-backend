require('dotenv').config()

const express = require('express')

// the express app
const app = express()

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the app!'
    })
})

app.listen(process.env.PORT, (event) => {
    console.log('Listening in port 4000!', event)
})