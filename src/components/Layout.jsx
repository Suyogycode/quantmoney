// components/Layout.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Settings, BarChart2, Code, BookOpen, Link as LinkIcon, Activity } from 'lucide-react';

const Layout = ({ children }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? "text-blue-400" : "text-slate-400 hover:text-white";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col font-sans">
      {/* ----- HEADER ----- */}
      <header className="h-16 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-6 fixed w-full top-0 z-50">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">Q</div>
          <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            QuantLab India
          </span>
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {/* Simulated Dropdowns as direct links for prototype */}
            <Link to="/terminal" className={`flex items-center gap-1 ${isActive('/terminal')}`}><BarChart2 size={16}/> Terminal</Link>
            <Link to="/algolab" className={`flex items-center gap-1 ${isActive('/algolab')}`}><Code size={16}/> Algo Lab</Link>
            <Link to="/dashboard" className={`flex items-center gap-1 ${isActive('/dashboard')}`}><Activity size={16}/> Dashboard</Link>
            <Link to="/education" className={`flex items-center gap-1 ${isActive('/education')}`}><BookOpen size={16}/> Education</Link>
        </nav>

        {/* Right: Controls */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-slate-800 rounded-md px-3 py-1.5 border border-slate-700">
            <Search size={16} className="text-slate-400 mr-2" />
            <input type="text" placeholder="Search Symbol..." className="bg-transparent border-none focus:outline-none text-sm text-white w-48" />
          </div>

          {/* Broker Status */}
          <Link to="/connect" className="flex items-center gap-2 text-xs bg-slate-800 py-1 px-2 rounded border border-slate-700 hover:border-slate-500 transition">
             <div className="w-2 h-2 rounded-full bg-red-500"></div> {/* Red = Disconnected */}
             <span className="hidden sm:block">Broker: Disconnected</span>
          </Link>

          <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-xs font-bold py-2 px-4 rounded hidden sm:block">
            GO PRO
          </button>
          <button className="text-slate-400 hover:text-white"><User size={20} /></button>
        </div>
      </header>

      {/* ----- MAIN CONTENT SCROLL AREA ----- */}
      <main className="flex-1 mt-16 flex flex-col relative">
        {children}
      </main>

      {/* ----- FOOTER ----- */}
      <footer className="bg-slate-950 border-t border-slate-800 py-6 px-6 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            {/* CRITICAL LEGAL DISCLAIMER */}
            <div className="text-xs text-slate-500 max-w-2xl">
                <span className="font-bold text-slate-400 block mb-1">CRITICAL DISCLAIMER:</span>
                This platform is for educational and backtesting purposes only. We are not a SEBI registered investment advisor. Real market data is retrieved via the user's own broker APIs. Paper trading results are simulated and do not represent actual trading.
            </div>
            <div className="flex gap-6 text-xs text-slate-400">
                <a href="#" className="hover:text-blue-400">Terms</a>
                <a href="#" className="hover:text-blue-400">Privacy</a>
                <Link to="/connect" className="hover:text-blue-400">Broker Guide</Link>
                <a href="#" className="hover:text-blue-400">Contact</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;