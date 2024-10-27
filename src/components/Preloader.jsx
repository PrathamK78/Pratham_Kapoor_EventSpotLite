import React from 'react'

const Preloader = () => (
    <div className="fixed inset-0 bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col items-center justify-center z-50">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-8 border-white/20 rounded-full"></div>
        <div className="absolute inset-0 border-8 border-t-white rounded-full animate-spin"></div>
      </div>
      <h1 className="text-white text-3xl font-bold mt-8 animate-pulse">EventSpot Lite</h1>
      <p className="text-white/80 mt-2">Discovering events near you...</p>
    </div>
  );
  

export default Preloader