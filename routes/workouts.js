const express = require('express')
const router = express.Router()
const {getAll, create, getOne, remove, update} = require('../controllers/WorkoutController')

router.get('/', getAll)

router.get('/:id', getOne)

router.post('/', create)

router.delete('/:id', remove)

router.patch('/:id', update)

module.exports = router