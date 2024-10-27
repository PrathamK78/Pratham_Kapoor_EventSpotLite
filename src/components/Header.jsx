import React,{ useState } from 'react'
// import { Search } from 'lucide-react'
import '../App.css'

const Header = ({ searchTerm, setSearchTerm, usePattern, setUsePattern }) => (
  <header className="bg-transparent backdrop-blur-md shadow-sm sticky top-0 z-10">
    <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl quicksand-font font-bold text-white">EventSpot Lite</h1>
          <p className="text-sm text-gray-400 mt-1">Discover events near you</p>
        </div>
            <div className="flex items-center gap-4">
              
              <button 
              onClick={() => setUsePattern(!usePattern)}
              className="btn-31">
                <span className="text-container">
                  <span className="text">Toggle BG</span>
                </span>
              </button>

          <div class="input-container">
                <input
                  type="text"
                  placeholder="Search your events..."
                  className="input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header