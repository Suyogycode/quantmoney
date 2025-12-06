// pages/Terminal.jsx
import React, { useState } from 'react';
import { Pencil, Minus, Type, Clock, ChevronDown, Plus, List, Newspaper, TrendingUp, Shield } from 'lucide-react';
const Terminal = () => {
  const [rightPanelTab, setRightPanelTab] = useState('watchlist');

  return (
    // Main Terminal Container - takes full height minus header
    <div className="flex flex-1 h-[calc(100vh-4rem)] overflow-hidden">

      {/* ----- LEFT TOOLBAR ----- */}
      <div className="w-14 bg-slate-900 border-r border-slate-800 flex flex-col items-center py-4 gap-6 text-slate-400">
        <button className="hover:text-blue-400 hover:bg-slate-800 p-2 rounded"><TrendingUp size={20} /></button>
        <button className="hover:text-blue-400 hover:bg-slate-800 p-2 rounded"><Pencil size={20} /></button>
        <button className="hover:text-blue-400 hover:bg-slate-800 p-2 rounded"><Minus size={20} /></button>
        <button className="hover:text-blue-400 hover:bg-slate-800 p-2 rounded"><Type size={20} /></button>
      </div>

      {/* ----- CENTER: CHART & BOTTOM PANEL ----- */}
      <div className="flex-1 flex flex-col relative">

        {/* Top Bar (Chart Specific) */}
        <div className="h-12 border-b border-slate-800 bg-slate-900 flex items-center px-4 justify-between">
           <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 font-bold text-lg">
                RELIANCE <span className="text-xs text-slate-500 bg-slate-800 px-1 rounded">NSE</span>
              </div>
              <div className="h-6 w-px bg-slate-700 mx-2"></div>
              <div className="flex gap-1 text-sm text-slate-400">
                <button className="hover:text-white px-2 rounded">1m</button>
                <button className="hover:text-white px-2 rounded">5m</button>
                <button className="text-blue-400 font-bold bg-slate-800 px-2 rounded">15m</button>
                <button className="hover:text-white px-2 rounded">1H</button>
              </div>
              <div className="h-6 w-px bg-slate-700 mx-2"></div>
              <button className="flex items-center gap-1 text-sm text-slate-300 hover:text-white"><Clock size={14}/> Indicators <ChevronDown size={12}/></button>
           </div>
           <div>
              <button className="text-xs bg-blue-900/30 text-blue-400 px-3 py-1 rounded border border-blue-800 hover:bg-blue-900/50">Replay Mode</button>
           </div>
        </div>

        {/* Main Chart Area (Placeholder) */}
        <div className="flex-1 bg-slate-900/50 relative flex items-center justify-center">
            <div className="text-slate-600 flex flex-col items-center animate-pulse">
                <TrendingUp size={48} className="mb-4 opacity-50"/>
                <p className="text-lg">Waiting for Broker Connection...</p>
                <p className="text-sm">Connect Shoonya/Zerodha API to enable live charting.</p>
            </div>
            {/* Fake Price Overlay for effect */}
             <div className="absolute top-4 left-4 p-4 bg-slate-900/80 border border-slate-800 rounded backdrop-blur-md z-10">
                <div className="text-2xl font-bold flex items-center gap-2">
                    2,456.75 <span className="text-sm text-emerald-400">+12.40 (0.51%)</span>
                </div>
                 <div className="text-xs text-slate-400 mt-1 flex gap-4">
                    <span>O: 2445.00</span><span>H: 2460.10</span><span>L: 2440.00</span>
                 </div>
            </div>
        </div>

        {/* Bottom Panel (The Paper Trader) */}
        <div className="h-64 border-t border-slate-800 bg-slate-900 flex flex-col">
            {/* Tabs */}
            <div className="flex border-b border-slate-800 text-sm">
                <button className="px-4 py-2 border-b-2 border-blue-500 text-blue-400 font-medium">Positions (Sim)</button>
                <button className="px-4 py-2 text-slate-400 hover:text-white">Open Orders</button>
                <button className="px-4 py-2 text-slate-400 hover:text-white">Trade Log</button>
            </div>
            {/* Controls & Content */}
            <div className="flex-1 p-4 flex justify-between">
                <div className="text-sm text-slate-400">No open simulated positions.</div>
                {/* Action Panel */}
                <div className="w-72 bg-slate-800 p-4 rounded border border-slate-700 flex flex-col gap-3">
                     <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-400">Qty: <input type="number" className="bg-slate-900 border border-slate-700 w-16 text-center ml-2 rounded" defaultValue={10} /></span>
                        <span className="text-slate-400">Mkt Price</span>
                     </div>
                    <div className="flex gap-2">
                        <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded relative overflow-hidden group">
                            BUY
                            <div className="text-[9px] font-normal text-emerald-200 uppercase tracking-wider">Simulated Order</div>
                        </button>
                        <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded relative overflow-hidden group">
                            SELL
                            <div className="text-[9px] font-normal text-red-200 uppercase tracking-wider">Simulated Order</div>
                        </button>
                    </div>
                    <div className="text-center text-xs text-orange-400 font-medium flex items-center justify-center gap-1">
                       <Shield size={12}/> Paper Trading Mode Active
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* ----- RIGHT SIDEBAR (Collapsible) ----- */}
      <div className="w-72 border-l border-slate-800 bg-slate-900 flex flex-col">
          <div className="flex border-b border-slate-800">
              <button
                onClick={()=>setRightPanelTab('watchlist')}
                className={`flex-1 py-2 text-sm flex items-center justify-center gap-2 ${rightPanelTab === 'watchlist' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400'}`}>
                <List size={14}/> Watchlist
              </button>
              <button
                onClick={()=>setRightPanelTab('news')}
                className={`flex-1 py-2 text-sm flex items-center justify-center gap-2 ${rightPanelTab === 'news' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400'}`}>
                <Newspaper size={14}/> News
              </button>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
              {rightPanelTab === 'watchlist' && (
                  <div className="flex flex-col gap-1">
                     {/* Watchlist Items */}
                      {['NIFTY 50', 'BANKNIFTY', 'RELIANCE', 'HDFCBANK', 'INFY'].map(symbol => (
                          <div key={symbol} className="flex justify-between items-center p-2 hover:bg-slate-800 rounded cursor-pointer group">
                             <span className="font-medium">{symbol}</span>
                             <span className="text-sm text-emerald-400 group-hover:text-white">19,500.20</span>
                          </div>
                      ))}
                  </div>
              )}

              {rightPanelTab === 'news' && (
                  <div className="flex flex-col gap-4 p-2">
                      <div className="text-xs text-slate-500 mb-2">News for RELIANCE</div>
                      <div className="border-b border-slate-800 pb-2">
                        <h5 className="text-sm font-medium hover:text-blue-400 cursor-pointer mb-1">Reliance to acquire new energy firm...</h5>
                        <p className="text-xs text-slate-400">Economic Times • 10m ago</p>
                      </div>
                       <div className="border-b border-slate-800 pb-2">
                        <h5 className="text-sm font-medium hover:text-blue-400 cursor-pointer mb-1">Oil prices surge, impacting major refiners.</h5>
                        <p className="text-xs text-slate-400">Mint • 1H ago</p>
                      </div>
                  </div>
              )}
          </div>
      </div>
    </div>
  );
};

export default Terminal;