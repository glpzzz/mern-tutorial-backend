const express = require('express')
const Workout = require('../models/workout')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        message: 'get all workouts',
    })
})

router.get('/:id', (req, res) => {
    res.json({
        message: 'get a single workout'
    })
})

router.post('/', async (req, res) => {
    const {title, reps, load} = req.body
    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch (err) {
        console.error(err)
        res.status(400).json({
            error: error.message,
        })
    }
})

router.delete('/:id', (req, res) => {
    res.json({
        message: 'delete a single workout'
    })
})

router.patch('/:id', (req, res) => {
    res.json({
        message: 'update a single workout'
    })
})

module.exports = router