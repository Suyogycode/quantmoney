// pages/Education.jsx
import React from 'react';
import { Search, BookOpen, Code, Video, MessageCircle, FileText, ChevronRight } from 'lucide-react';

const Education = () => {
  const tutorials = [
    { icon: <Code className="text-blue-400"/>, title: "Getting Started with Python for Finance", desc: "Setup your environment and learn basic Pandas for stock data.", category: "Beginner" },
    { icon: <FileText className="text-emerald-400"/>, title: "Understanding Market Data", desc: "What are OHLC candles, ticks, and order books?", category: "Concepts" },
    { icon: <Server className="text-orange-400"/>, title: "How to connect Shoonya API", desc: "Step-by-step guide to generating keys and authenticating.", category: "Integrations" },
    { icon: <Video className="text-purple-400"/>, title: "Building a Moving Average Bot", desc: "Video tutorial on coding a simple crossover strategy.", category: "Strategy" },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
       <div className="text-center my-12">
          <h1 className="text-4xl font-bold mb-6">Documentation & Learning Hub</h1>
          {/* Big Search Bar */}
          <div className="max-w-2xl mx-auto relative">
             <Search className="absolute left-4 top-4 text-slate-500" size={24}/>
             <input type="text" placeholder="How to calculate RSI in Python..." className="w-full bg-slate-800 border border-slate-700 rounded-xl py-4 pl-14 pr-4 text-lg focus:outline-none focus:border-blue-500 transition shadow-lg" />
          </div>
       </div>

       <div className="grid md:grid-cols-3 gap-8 mt-16">
           {/* Main Tutorials Column */}
           <div className="md:col-span-2">
               <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><BookOpen size={20}/> Latest Tutorials</h2>
               <div className="flex flex-col gap-4">
                   {tutorials.map((tut, index) => (
                       <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex items-start gap-4 hover:border-blue-500/50 transition cursor-pointer group">
                           <div className="bg-slate-900 p-3 rounded-lg">{tut.icon}</div>
                           <div className="flex-1">
                               <div className="flex justify-between mb-1">
                                   <h3 className="font-bold text-lg group-hover:text-blue-400 transition">{tut.title}</h3>
                                   <span className="text-xs bg-slate-900 text-slate-400 px-2 py-1 rounded-full">{tut.category}</span>
                               </div>
                               <p className="text-slate-400 text-sm">{tut.desc}</p>
                           </div>
                           <ChevronRight className="text-slate-600 group-hover:text-blue-400 self-center"/>
                       </div>
                   ))}
               </div>
           </div>

           {/* Sidebar: API Docs & Community */}
           <div className="flex flex-col gap-8">
               {/* Quick API Links */}
               <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                   <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><Code size={18}/> API Quick Reference</h2>
                   <ul className="flex flex-col gap-2 text-sm font-mono">
                       <li><a href="#" className="text-blue-400 hover:underline">get_data()</a></li>
                       <li><a href="#" className="text-blue-400 hover:underline">place_order()</a></li>
                       <li><a href="#" className="text-blue-400 hover:underline">get_positions()</a></li>
                   </ul>
                   <button className="mt-4 w-full py-2 text-sm border border-slate-600 rounded hover:bg-slate-700 transition">View Full API Docs</button>
               </div>

               {/* Community Block */}
               <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-800/30">
                   <h2 className="text-lg font-bold mb-2 flex items-center gap-2"><MessageCircle size={18}/> Community Forum</h2>
                   <p className="text-sm text-slate-400 mb-4">Join the discussion. Share generic code snippets and learn from others.</p>
                   <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-sm font-bold transition">Visit Forum</button>
               </div>
           </div>
       </div>
    </div>
  );
};

// Need to define Server icon locally if not imported elsewhere
const Server = ({size, className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
);


export default Education;