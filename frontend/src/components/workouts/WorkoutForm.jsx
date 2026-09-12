import React, { useState, useContext } from 'react';
import './WorkoutForm.module.css';
import { WorkoutContext } from '../../context/WorkoutContext';
import ExerciseInput from './ExerciseInput';

export default function WorkoutForm() {
  const { addWorkout } = useContext(WorkoutContext);
  const [title, setTitle] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('Monday');
  const [exercises, setExercises] = useState([{ name: '', sets: 3, reps: 10, weight: 0 }]);

  const handleExerciseChange = (index, field, value) => {
    const updated = [...exercises];
    updated[index][field] = value;
    setExercises(updated);
  };

  const addExercise = () => {
    setExercises([...exercises, { name: '', sets: 3, reps: 10, weight: 0 }]);
  };

  const removeExercise = (index) => {
    setExercises(exercises.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addWorkout({ title, dayOfWeek, exercises });
    setTitle('');
    setExercises([{ name: '', sets: 3, reps: 10, weight: 0 }]);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-8">
      <h2 className="text-xl font-bold mb-4">Create Routine</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Routine Title (e.g. Chest & Triceps)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 bg-slate-900 border border-slate-700 rounded text-white"
          required
        />
        <select
          value={dayOfWeek}
          onChange={(e) => setDayOfWeek(e.target.value)}
          className="p-2 bg-slate-900 border border-slate-700 rounded text-white"
        >
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <h3 className="font-semibold mb-2">Exercises</h3>
      {exercises.map((ex, i) => (
        <ExerciseInput 
          key={i} 
          index={i} 
          exercise={ex} 
          onChange={handleExerciseChange} 
          onRemove={removeExercise} 
        />
      ))}

      <div className="flex gap-4 mt-4">
        <button type="button" onClick={addExercise} className="bg-slate-700 px-4 py-2 rounded text-sm">
          + Add Exercise
        </button>
        <button type="submit" className="bg-blue-600 px-6 py-2 rounded font-bold">Save Routine</button>
      </div>
    </form>
  );
}