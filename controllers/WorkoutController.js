const Workout = require('../models/workout')
const mongoose = require('mongoose')

// get all workouts
const getAll = async (req, res) => {
    try {
        res.status(200).json(await Workout.find({}).sort({createdAt: -1}))
    } catch (err) {
        console.error(err)
        res.status(400).json({error: err.message})
    }
}

// get a single workout
const getOne = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Invalid ID"})
    }

    try {
        const model = await Workout.findById(id)
        if(model){
            return res.status(200).json(model)
        }else{
            return res.status(404).json({error: "Resource not found"})
        }

    } catch (err) {
        console.error(err)
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
        console.error(err)
        return res.status(400).json({
            error: error.message,
        })
    }
}

// delete a workout

// update a workout


module.exports = {
    getAll,
    getOne,
    create,
}