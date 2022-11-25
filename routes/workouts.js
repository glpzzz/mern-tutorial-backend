const express = require('express')
const router = express.Router()
const {getAll, create, getOne} = require('../controllers/WorkoutController')

router.get('/', getAll)

router.get('/:id', getOne)

router.post('/', create)

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