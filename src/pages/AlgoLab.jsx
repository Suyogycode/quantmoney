// pages/AlgoLab.jsx
import React from 'react';
import { Folder, Play, Save, Bug, FileCode, Book, ChevronRight } from 'lucide-react';

const AlgoLab = () => {
  return (
     <div className="flex flex-1 h-[calc(100vh-4rem)] overflow-hidden bg-[#1e1e1e]"> {/* VS Code dark bg color */}

      {/* ----- LEFT SIDEBAR (Project Explorer) ----- */}
      <div className="w-60 bg-[#252526] border-r border-[#333] flex flex-col text-sm">
          <div className="p-2 uppercase text-xs font-bold text-slate-500 pl-4">Explorer</div>
          <div className="flex flex-col gap-1 p-2 text-slate-300">
              <div className="flex items-center gap-1 hover:bg-[#37373d] p-1 rounded cursor-pointer">
                <ChevronRight size={14} className="text-slate-500"/> <Folder size={14} className="text-blue-400"/> My Strategies
              </div>
               <div className="pl-6 flex flex-col gap-1">
                 <div className="flex items-center gap-1 hover:bg-[#37373d] p-1 rounded cursor-pointer bg-[#37373d]">
                    <FileCode size={14} className="text-yellow-400"/> Nifty_MA_Cross.py
                 </div>
                  <div className="flex items-center gap-1 hover:bg-[#37373d] p-1 rounded cursor-pointer">
                    <FileCode size={14} className="text-yellow-400"/> Reliance_RSI.py
                 </div>
               </div>
               <div className="flex items-center gap-1 hover:bg-[#37373d] p-1 mt-4 rounded cursor-pointer">
                <ChevronRight size={14} className="text-slate-500"/> <Folder size={14} className="text-purple-400"/> Sample Algos
              </div>
          </div>
      </div>

       {/* ----- CENTER (Code Editor) ----- */}
      <div className="flex-1 flex flex-col relative">
          {/* Editor Top Controls */}
          <div className="h-10 bg-[#2d2d2d] flex items-center justify-between px-4 border-b border-[#1e1e1e]">
             <div className="flex gap-2">
                <span className="text-sm text-slate-300 bg-[#1e1e1e] px-3 py-1 border-t-2 border-blue-400">Nifty_MA_Cross.py</span>
             </div>
             <div className="flex gap-2">
                <button className="flex items-center gap-1 px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs rounded"><Play size={12}/> Run Backtest</button>
                <button className="p-1 hover:bg-slate-700 rounded text-slate-400"><Save size={16}/></button>
             </div>
          </div>

          {/* Code Editor Placeholder (Monaco style) */}
          <div className="flex-1 p-4 font-mono text-sm text-slate-300 overflow-y-auto">
              <div className="text-slate-500"># Simple Moving Average Crossover Strategy</div>
              <div><span className="text-blue-400">import</span> pandas <span className="text-blue-400">as</span> pd</div>
              <div><span className="text-blue-400">import</span> talib</div>
              <br/>
              <div><span className="text-blue-400">def</span> <span className="text-yellow-300">initialize</span>(context):</div>
              <div className="pl-4">context.symbol = <span className="text-orange-300">"NSE:NIFTY50"</span></div>
              <div className="pl-4">context.short_window = <span className="text-emerald-300">20</span></div>
              <div className="pl-4">context.long_window = <span className="text-emerald-300">50</span></div>
              <br/>
              <div><span className="text-blue-400">def</span> <span className="text-yellow-300">on_data</span>(context, data):</div>
              <div className="pl-4 text-slate-500"># Logic goes here...</div>
               {/* Cursor */}
               <div className="pl-4 inline-block w-2 h-5 bg-slate-300 animate-pulse mt-1"></div>
          </div>

          {/* Bottom Panel (Console/Results) */}
          <div className="h-48 bg-[#1e1e1e] border-t border-[#333] flex flex-col">
             <div className="flex border-b border-[#333] text-xs uppercase text-slate-400">
                 <div className="px-4 py-1 border-b border-blue-400 text-blue-300">Console output</div>
                 <div className="px-4 py-1 hover:bg-[#2d2d2d] cursor-pointer">Backtest Results</div>
             </div>
             <div className="flex-1 p-2 font-mono text-xs text-slate-400 overflow-y-auto">
                 &gt; Initializing backtest engine...<br/>
                 &gt; Fetching historical data for NIFTY50...<br/>
                 <span className="text-yellow-400">[WARNING] Data gap detected on 2023-10-15. Filling with previous close.</span><br/>
                 &gt; Ready.
             </div>
          </div>
      </div>

      {/* ----- RIGHT PANEL (Docs Helper) ----- */}
      <div className="w-64 bg-[#252526] border-l border-[#333] flex flex-col">
          <div className="p-2 uppercase text-xs font-bold text-slate-500 border-b border-[#333] flex items-center gap-2">
            <Book size={14}/> API Reference
          </div>
           <div className="p-4 text-sm flex-1 overflow-y-auto text-slate-300">
               <h4 className="font-bold mb-2 text-blue-300">Trading Functions</h4>

               <div className="mb-4">
                   <code className="text-orange-300 text-xs">order(symbol, quantity)</code>
                   <p className="text-xs text-slate-400 mt-1">Place a market order. Quantity can be positive (buy) or negative (sell).</p>
                   <button className="text-xs bg-[#333] hover:bg-[#444] px-2 py-1 mt-1 rounded">Insert Snippet</button>
               </div>

                <div className="mb-4">
                   <code className="text-orange-300 text-xs">get_history(symbol, period)</code>
                   <p className="text-xs text-slate-400 mt-1">Fetch historical OHLC data as a Pandas DataFrame.</p>
               </div>

               <h4 className="font-bold mb-2 text-emerald-300 mt-6">TA-Lib Examples</h4>
                <div className="mb-4">
                   <code className="text-orange-300 text-xs">talib.RSI(close_prices)</code>
                </div>
           </div>
      </div>
    </div>
  );
};

export default AlgoLab;