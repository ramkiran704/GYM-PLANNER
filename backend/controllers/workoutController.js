const Workout = require('../models/Workout');

const getWorkouts = async (req, res, next) => {
  try {
    const workouts = await Workout.find({ userId: req.user.id });
    res.json(workouts);
  } catch (error) {
    next(error);
  }
};

const createWorkout = async (req, res, next) => {
  const { title, dayOfWeek, exercises } = req.body;
  try {
    const workout = await Workout.create({
      userId: req.user.id,
      title,
      dayOfWeek,
      exercises,
    });
    res.status(201).json(workout);
  } catch (error) {
    next(error);
  }
};

const updateWorkout = async (req, res, next) => {
  try {
    const workout = await Workout.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    if (!workout) {
      res.status(404);
      throw new Error('Workout not found');
    }
    res.json(workout);
  } catch (error) {
    next(error);
  }
};

const deleteWorkout = async (req, res, next) => {
  try {
    const workout = await Workout.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!workout) {
      res.status(404);
      throw new Error('Workout not found');
    }
    res.json({ message: 'Workout deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getWorkouts, createWorkout, updateWorkout, deleteWorkout };