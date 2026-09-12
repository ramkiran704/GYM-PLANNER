import React from 'react';

export default function Button({ children, onClick, type = 'button', variant = 'primary' }) {
  const styles = variant === 'primary' 
    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
    : 'bg-red-600 hover:bg-red-700 text-white';

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`px-4 py-2 rounded-lg font-semibold transition ${styles}`}
    >
      {children}
    </button>
  );
}