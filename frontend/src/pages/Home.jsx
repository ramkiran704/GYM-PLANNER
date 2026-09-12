import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center py-20 px-4">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-400">Plan & Track Your Gym Gains</h1>
      <p className="text-xl text-slate-400 mb-8">
        Build workout routines, record active session sets, and stay consistent.
      </p>
      <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl text-lg">
        Get Started Free
      </Link>
    </div>
  );
}