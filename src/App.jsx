// App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Page Imports
import Home from './pages/Home';
import Terminal from './pages/Terminal';
import AlgoLab from './pages/AlgoLab';
import Dashboard from './pages/Dashboard';
import BrokerConnect from './pages/BrokerConnect';
import Education from './pages/Education';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terminal" element={<Terminal />} />
          <Route path="/algolab" element={<AlgoLab />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/connect" element={<BrokerConnect />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;