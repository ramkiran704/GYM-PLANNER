import React from 'react';

export default function ExerciseInput({ exercise, index, onChange, onRemove }) {
  return (
    <div className="flex gap-2 mb-2 items-center">
      <input
        type="text"
        placeholder="Exercise Name"
        value={exercise.name}
        onChange={(e) => onChange(index, 'name', e.target.value)}
        className="flex-1 p-2 bg-slate-900 border border-slate-700 rounded text-white"
        required
      />
      <input
        type="number"
        placeholder="Sets"
        value={exercise.sets}
        onChange={(e) => onChange(index, 'sets', Number(e.target.value))}
        className="w-16 p-2 bg-slate-900 border border-slate-700 rounded text-white"
        required
      />
      <input
        type="number"
        placeholder="Reps"
        value={exercise.reps}
        onChange={(e) => onChange(index, 'reps', Number(e.target.value))}
        className="w-16 p-2 bg-slate-900 border border-slate-700 rounded text-white"
        required
      />
      <input
        type="number"
        placeholder="kg"
        value={exercise.weight}
        onChange={(e) => onChange(index, 'weight', Number(e.target.value))}
        className="w-20 p-2 bg-slate-900 border border-slate-700 rounded text-white"
      />
      <button type="button" onClick={() => onRemove(index)} className="text-red-400 p-2">✕</button>
    </div>
  );
}