require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
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

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        const {PORT} = process.env;
        app.listen(PORT, () => {
            console.log(`Connected to db and listening in port ${PORT}!`)
        })
    })
    .catch((err) => console.error(err))
