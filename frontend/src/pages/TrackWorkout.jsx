import React, { useContext, useState } from 'react';
import './TrackWorkout.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { WorkoutContext } from '../context/WorkoutContext';

export default function TrackWorkout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { workouts, editWorkout } = useContext(WorkoutContext);
  const workout = workouts.find((w) => w._id === id);

  if (!workout) return <div className="p-8 text-center">Workout not found.</div>;

  const [exercises, setExercises] = useState(workout.exercises);

  const toggleComplete = (index) => {
    const updated = [...exercises];
    updated[index].completed = !updated[index].completed;
    setExercises(updated);
  };

  const handleFinish = async () => {
    await editWorkout(workout._id, { ...workout, exercises });
    navigate('/dashboard');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-slate-800 rounded-xl my-8 border border-slate-700">
      <h2 className="text-2xl font-bold mb-2">{workout.title} Session</h2>
      <p className="text-slate-400 mb-6">{workout.dayOfWeek}</p>

      <div className="space-y-4 mb-6">
        {exercises.map((ex, i) => (
          <div 
            key={i} 
            onClick={() => toggleComplete(i)}
            className={`p-4 rounded-lg cursor-pointer border flex justify-between items-center transition ${
              ex.completed ? 'bg-green-950/40 border-green-600 text-green-300' : 'bg-slate-900 border-slate-700'
            }`}
          >
            <div>
              <h4 className="font-bold">{ex.name}</h4>
              <p className="text-sm opacity-80">{ex.sets} sets × {ex.reps} reps @ {ex.weight}kg</p>
            </div>
            <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${ex.completed ? 'border-green-400 bg-green-500 text-slate-950 font-bold' : 'border-slate-500'}`}>
              {ex.completed ? '✓' : ''}
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleFinish} className="w-full bg-blue-600 py-3 rounded-lg font-bold hover:bg-blue-700">
        Finish & Save Workout
      </button>
    </div>
  );
}