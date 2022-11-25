const express = require('express')

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

router.post('/', (req, res) => {
    res.json({
        message: 'create a single workout',
        body: req.body,
    })
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