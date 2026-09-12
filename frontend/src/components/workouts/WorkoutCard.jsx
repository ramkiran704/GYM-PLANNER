import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WorkoutContext } from '../../context/WorkoutContext';


export default function WorkoutCard({ workout }) {
  const { removeWorkout } = useContext(WorkoutContext);

  return (
    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg text-blue-400">{workout.title}</h3>
          <button onClick={() => removeWorkout(workout._id)} className="text-red-400 text-sm">Delete</button>
        </div>
        <ul className="text-sm space-y-1 mb-4">
          {workout.exercises.map((ex, i) => (
            <li key={i} className="text-slate-300">
              {ex.name}: {ex.sets}x{ex.reps} ({ex.weight}kg)
            </li>
          ))}
        </ul>
      </div>
      <Link 
        to={`/track/${workout._id}`} 
        className="block text-center bg-blue-600/20 text-blue-400 py-2 rounded-lg hover:bg-blue-600/30"
      >
        Start Session
      </Link>
    </div>
  );
}