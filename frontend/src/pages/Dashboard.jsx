import React, { useEffect, useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import WorkoutForm from '../components/workouts/WorkoutForm';
import WorkoutCard from '../components/workouts/WorkoutCard';

export default function Dashboard() {
  const { workouts, getWorkouts } = useContext(WorkoutContext);

  useEffect(() => {
    getWorkouts();
  }, []);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    /* Notice 'mx-auto' centers the element horizontally within its parent */
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <WorkoutForm />
      
      <h2 className="text-2xl font-bold mb-6 text-white">Weekly Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {days.map((day) => {
          const dayWorkouts = workouts.filter((w) => w.dayOfWeek === day);
          return (
            <div key={day} className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-4 text-blue-400 border-b border-slate-800 pb-2">{day}</h3>
              {dayWorkouts.length === 0 ? (
                <p className="text-slate-500 text-sm italic">Rest day</p>
              ) : (
                <div className="space-y-4">
                  {dayWorkouts.map((w) => (
                    <WorkoutCard key={w._id} workout={w} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}