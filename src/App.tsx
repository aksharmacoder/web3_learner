import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Airdrops from './pages/Airdrops';
import DeFi from './pages/DeFi';
import Gaming from './pages/Gaming';
import AI from './pages/AI';
import Storage from './pages/Storage';
import Computing from './pages/Computing';
import Social from './pages/Social';
import Governance from './pages/Governance';
import DApps from './pages/DApps';
import Education from './pages/Education';
import Exchanges from './pages/Exchanges';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/airdrops" element={<Airdrops />} />
          <Route path="/defi" element={<DeFi />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/computing" element={<Computing />} />
          <Route path="/social" element={<Social />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/dapps" element={<DApps />} />
          <Route path="/education" element={<Education />} />
          <Route path="/exchanges" element={<Exchanges />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;