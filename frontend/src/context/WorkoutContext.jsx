import React, { createContext, useState } from 'react';
import { 
  fetchWorkoutsAPI, 
  createWorkoutAPI, 
  updateWorkoutAPI, 
  deleteWorkoutAPI 
} from '../services/workoutService';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  const getWorkouts = async () => {
    const res = await fetchWorkoutsAPI();
    setWorkouts(res.data);
  };

  const addWorkout = async (data) => {
    const res = await createWorkoutAPI(data);
    setWorkouts((prev) => [...prev, res.data]);
  };

  const editWorkout = async (id, data) => {
    const res = await updateWorkoutAPI(id, data);
    setWorkouts((prev) => prev.map((w) => (w._id === id ? res.data : w)));
  };

  const removeWorkout = async (id) => {
    await deleteWorkoutAPI(id);
    setWorkouts((prev) => prev.filter((w) => w._id !== id));
  };

  return (
    <WorkoutContext.Provider value={{ workouts, getWorkouts, addWorkout, editWorkout, removeWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};