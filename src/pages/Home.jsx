// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Code, BarChart, Link as LinkIcon, Activity } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-slate-950">
      {/* Section A: Hero Section */}
      <section className="relative py-20 md:py-32 px-6 overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         <div className="relative max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              Master the Indian Markets with <br className="hidden md:block"/>Logic, Not Luck.
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Build, Backtest, and Paper Trade Indian Stocks and F&O using Python.
              <span className="block mt-2 text-blue-400 font-medium">Connect your broker for legally authorized data access.</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/terminal" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition transform hover:-translate-y-1">
                Start Paper Trading (Free)
              </Link>
              <Link to="/algolab" className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-3 px-8 rounded-lg text-lg border border-slate-700 transition">
                View Demo Strategy
              </Link>
            </div>
         </div>
      </section>

      {/* Section B: "How It Works" (The Legal Shield) */}
      <section className="py-16 px-6 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">How We Keep It Safe & Legal</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 text-slate-700 opacity-20"><LinkIcon size={100}/></div>
                    <div className="w-12 h-12 bg-blue-900/50 text-blue-400 flex items-center justify-center rounded-lg mb-4 font-bold text-xl">1</div>
                    <h3 className="text-xl font-bold mb-2">Connect Your Broker</h3>
                    <p className="text-slate-400 mb-4">We use your broker's API (e.g., Shoonya, Zerodha) to fetch authorized live market data directly to your browser.</p>
                    <div className="flex gap-2 opacity-60 grayscale">
                        {/* Placeholders for logos */}
                        <div className="h-6 w-16 bg-slate-600 rounded"></div>
                        <div className="h-6 w-16 bg-slate-600 rounded"></div>
                    </div>
                </div>
                 {/* Step 2 */}
                <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 text-slate-700 opacity-20"><Code size={100}/></div>
                    <div className="w-12 h-12 bg-emerald-900/50 text-emerald-400 flex items-center justify-center rounded-lg mb-4 font-bold text-xl">2</div>
                    <h3 className="text-xl font-bold mb-2">Build Strategy</h3>
                    <p className="text-slate-400">Use our cloud-based Python IDE geared with Pandas, NumPy, and TA-Lib to define your trading logic.</p>
                </div>
                 {/* Step 3 */}
                <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 text-slate-700 opacity-20"><Shield size={100}/></div>
                    <div className="w-12 h-12 bg-orange-900/50 text-orange-400 flex items-center justify-center rounded-lg mb-4 font-bold text-xl">3</div>
                    <h3 className="text-xl font-bold mb-2">Simulate Risk-Free</h3>
                    <p className="text-slate-400">Test with <span className="text-orange-400 font-bold">₹1 Crore virtual capital</span> on live market movements before deploying real money.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Section C: Features Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
         <h2 className="text-2xl font-bold text-center mb-12">Professional Grade Tools</h2>
         <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-slate-800 rounded hover:border-blue-500/50 transition bg-slate-900/30">
                <BarChart className="text-blue-500 mb-4" size={32}/>
                <h4 className="text-lg font-bold mb-2">Interactive Charting</h4>
                <p className="text-slate-400 text-sm">TradingView-style interactive charts with multi-timeframe analysis.</p>
            </div>
            <div className="p-6 border border-slate-800 rounded hover:border-blue-500/50 transition bg-slate-900/30">
                <Activity className="text-purple-500 mb-4" size={32}/>
                <h4 className="text-lg font-bold mb-2">Real-time News Feed</h4>
                <p className="text-slate-400 text-sm">Live market news aggregation specific to Indian indices and stocks.</p>
            </div>
            <div className="p-6 border border-slate-800 rounded hover:border-blue-500/50 transition bg-slate-900/30">
                <Code className="text-emerald-500 mb-4" size={32}/>
                <h4 className="text-lg font-bold mb-2">Algo Engine</h4>
                <p className="text-slate-400 text-sm">Institutional grade backtesting engine running on cloud compute.</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;