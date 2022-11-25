require('dotenv').config()

const express = require('express')
const routesWorkout = require('./routes/workouts')

// the express app
const app = express()

// middlewares
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

app.use('/api/workouts', routesWorkout)

const {PORT} = process.env;
app.listen(PORT, () => {
    console.log(`Listening in port ${PORT}!`)
})