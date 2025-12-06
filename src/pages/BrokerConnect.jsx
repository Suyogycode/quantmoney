// pages/BrokerConnect.jsx
import React, { useState } from 'react';
import { Link as LinkIcon, CheckCircle, AlertCircle, Key, Server } from 'lucide-react';

const BrokerConnect = () => {
  const [selectedBroker, setSelectedBroker] = useState('shoonya');

  const brokers = [
    { id: 'shoonya', name: 'Shoonya (Finvasia)', status: 'Disconnected', freeApi: true, color: 'from-blue-500 to-cyan-500' },
    { id: 'zerodha', name: 'Zerodha Kite', status: 'Disconnected', freeApi: false, color: 'from-orange-500 to-red-500' },
    { id: 'dhan', name: 'Dhan', status: 'Coming Soon', freeApi: true, color: 'from-purple-500 to-pink-500', disabled: true },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto my-10">
      <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <Server className="text-blue-500"/> Connect Data Source
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              To access live Indian market data legally, please authenticate with your existing broker.
              <span className="block mt-2 text-sm bg-slate-800/50 py-2 rounded border border-slate-700 flex items-center justify-center gap-2">
                 <Shield size={16} className="text-emerald-500"/> We do not store your passwords. We only securely handle the temporary access token.
              </span>
          </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Broker Selection Cards */}
          <div className="md:col-span-1 flex flex-col gap-4">
            {brokers.map((broker) => (
                <button
                    key={broker.id}
                    disabled={broker.disabled}
                    onClick={() => setSelectedBroker(broker.id)}
                    className={`p-4 rounded-xl border text-left transition relative overflow-hidden
                        ${broker.disabled ? 'opacity-50 cursor-not-allowed border-slate-800 bg-slate-900' :
                          selectedBroker === broker.id
                            ? `border-blue-500 bg-slate-800/80`
                            : 'border-slate-800 bg-slate-900 hover:border-slate-600'
                        }`}
                >
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${broker.color} opacity-10 blur-xl rounded-full -mr-10 -mt-10`}></div>
                    <h3 className="font-bold text-lg mb-1">{broker.name}</h3>
                    <div className="flex items-center justify-between">
                        <span className="text-xs flex items-center gap-1 text-slate-400">
                            <div className={`w-2 h-2 rounded-full ${broker.status === 'Connected' ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                            {broker.status}
                        </span>
                        {broker.freeApi && <span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded-full">Free API</span>}
                    </div>
                </button>
            ))}
          </div>

          {/* Right: API Management Panel */}
          <div className="md:col-span-2 bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Key className="text-yellow-500"/> Setup {brokers.find(b=>b.id === selectedBroker)?.name}
              </h2>

              {selectedBroker === 'shoonya' && (
                  <div className="flex flex-col gap-6">
                      <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">User ID / Client Code</label>
                          <input type="text" placeholder="e.g., FA12345" className="w-full bg-slate-900 border border-slate-700 rounded-md p-3 focus:outline-none focus:border-blue-500 transition font-mono" />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">API Key (Vendor Key)</label>
                          <input type="password" placeholder="Paste your long API key here..." className="w-full bg-slate-900 border border-slate-700 rounded-md p-3 focus:outline-none focus:border-blue-500 transition font-mono" />
                          <p className="text-xs text-slate-500 mt-2 flex items-center gap-1"><AlertCircle size={12}/> Make sure you have enabled API access in your Shoonya portal.</p>
                      </div>
                      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded flex items-center justify-center gap-2 transition">
                          <LinkIcon size={18}/> Test & Connect
                      </button>
                  </div>
              )}
               {selectedBroker === 'zerodha' && (
                  <div className="flex flex-col gap-6 items-center justify-center h-64 text-slate-400">
                      <p>Zerodha requires a redirect login flow.</p>
                      <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded flex items-center justify-center gap-2 transition">
                        Login with Kite Connect
                      </button>
                  </div>
               )}
          </div>
      </div>
    </div>
  );
};

// Need to define Shield icon locally if not imported elsewhere
const Shield = ({size, className}) => (
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);


export default BrokerConnect;