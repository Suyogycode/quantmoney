// pages/Dashboard.jsx
import React from 'react';
import { TrendingUp, TrendingDown, RefreshCcw, DollarSign, PieChart, Activity } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Paper Trading Performance</h1>
        <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2 rounded text-sm text-orange-400 hover:text-orange-300 transition">
            <RefreshCcw size={16}/> Reset Simulation Account
        </button>
      </div>

      {/* Header Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Net Liquidity */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10"><DollarSign size={40}/></div>
            <h3 className="text-slate-400 text-sm font-medium uppercase mb-2">Net Liquidity (Virtual)</h3>
            <div className="text-3xl font-bold font-mono text-white">₹1,00,05,000</div>
            <div className="text-xs text-slate-500 mt-2">Starting capital: ₹1 Crore</div>
        </div>

        {/* Day P&L */}
         <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10 text-emerald-500"><TrendingUp size={40}/></div>
            <h3 className="text-slate-400 text-sm font-medium uppercase mb-2">Day P&L</h3>
            <div className="text-3xl font-bold font-mono text-emerald-400 flex items-center gap-2">
                +₹5,000 <span className="text-lg">(+0.05%)</span>
            </div>
        </div>

        {/* Win Rate */}
         <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10 text-blue-500"><PieChart size={40}/></div>
            <h3 className="text-slate-400 text-sm font-medium uppercase mb-2">Win Rate</h3>
            <div className="text-3xl font-bold font-mono text-white">65%</div>
            <div className="text-xs text-slate-500 mt-2">13 Wins / 7 Losses</div>
        </div>

         {/* Sharpe Ratio */}
         <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10 text-purple-500"><Activity size={40}/></div>
            <h3 className="text-slate-400 text-sm font-medium uppercase mb-2">Sharpe Ratio</h3>
            <div className="text-3xl font-bold font-mono text-white">1.24</div>
            <div className="text-xs text-slate-500 mt-2">Risk-adjusted return metric</div>
        </div>
      </div>

      {/* Main Graph & Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Equity Curve Placeholder */}
          <div className="lg:col-span-2 bg-slate-800 p-6 rounded-xl border border-slate-700 h-96 flex flex-col">
              <h3 className="text-lg font-bold mb-4">Equity Curve vs Benchmark</h3>
              {/* Simple SVG placeholder for graph */}
              <div className="flex-1 bg-slate-900/50 rounded relative overflow-hidden flex items-end px-4 pb-4">
                  {/* Fake grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-20 pointer-events-none">
                      <div className="border-t border-slate-500 h-1"></div>
                      <div className="border-t border-slate-500 h-1"></div>
                      <div className="border-t border-slate-500 h-1"></div>
                      <div className="border-t border-slate-500 h-1"></div>
                  </div>
                  {/* Fake Lines */}
                  <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                      {/* Benchmark (Nifty) - Gray */}
                      <path d="M0,45 C10,40 30,42 50,35 S70,30 100,25" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4"/>
                      {/* Account - Green */}
                      <path d="M0,45 C10,42 30,30 50,28 S70,15 100,10" fill="none" stroke="#34d399" strokeWidth="3"/>
                  </svg>
                  <div className="absolute bottom-4 right-4 flex gap-4 text-xs font-bold">
                      <span className="flex items-center gap-1"><div className="w-3 h-1 bg-emerald-400"></div> Account</span>
                      <span className="flex items-center gap-1"><div className="w-3 h-1 bg-slate-500"></div> Nifty 50</span>
                  </div>
              </div>
          </div>

          {/* Detailed Stats Table */}
           <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-lg font-bold mb-6">Detailed Statistics</h3>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                        <span className="text-slate-400">Total Trades</span>
                        <span className="font-mono font-bold">20</span>
                    </div>
                     <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                        <span className="text-slate-400">Max Drawdown</span>
                        <span className="font-mono font-bold text-red-400">-2.5%</span>
                    </div>
                     <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                        <span className="text-slate-400">Avg. Win</span>
                        <span className="font-mono font-bold text-emerald-400">₹1,200</span>
                    </div>
                     <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                        <span className="text-slate-400">Avg. Loss</span>
                        <span className="font-mono font-bold text-red-400">-₹850</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                        <span className="text-slate-400">Profit Factor</span>
                        <span className="font-mono font-bold">1.8</span>
                    </div>
                </div>
           </div>
      </div>
    </div>
  );
};

export default Dashboard;