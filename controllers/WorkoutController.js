const Workout = require('../models/workout')
const mongoose = require('mongoose')

// get all workouts
const getAll = async (req, res) => {
    try {
        res.status(200).json(await Workout.find({}).sort({createdAt: -1}))
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// get a single workout
const getOne = async (req, res) => {
    const {id} = req.params
    try {
        const model = await findModel(id)
        return res.status(200).json(model)
    } catch (err) {
        return res.status(400).json({error: err.message})
    }
}

// create a new workout
const create = async (req, res) => {
    const {title, reps, load} = req.body
    try {
        const workout = await Workout.create({title, reps, load})
        return res.status(200).json(workout)
    } catch (err) {
        return res.status(400).json({
            error: error.message,
        })
    }
}

// delete a workout
const remove = async (req, res) => {
    const {id} = req.params
    try {
        const model = await findModel(id)
        await Workout.deleteOne(model._id)
        return res.status(200).json(model)
    } catch (err) {
        return res.status(400).json({error: err.message})
    }
}

// update a workout
const update = async (req, res) => {
    const {id} = req.params
    try {
        await findModel(id);
        const workout = await Workout.findByIdAndUpdate(id, {...req.body})
        return res.status(200).json(workout)
    } catch (err) {
        return res.status(400).json({error: err.message})
    }
}

const findModel = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid ID"})
    }
    const model = await Workout.findById(id)
    if (!model) {
        throw new Error('Workout not found.')
    }
    return model
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove,
}