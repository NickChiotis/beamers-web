import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getSystemsStatus } from './services/StatusService';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SyndicateGallery from './components/SyndicateGallery';
import './App.css';

// --- ICONS (Πρέπει να υπάρχουν και εδώ) ---
const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009BDA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
)
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
)

function App() {
  // Ορίζουμε το State για το Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Ορίζουμε τα χρώματα BMW
  const mLightBlue = "#009BDA";
  const mDarkBlue = "#0033A0";
  const mRed = "#FF0000";

  const copyIP = () => {
    navigator.clipboard.writeText("play.thebeamersprojectv1.com");
    alert("IP Copied to clipboard!");

    const [status, setStatus] = useState({ minecraft: null, cloud: null });

// Κάθε φορά που ανοίγει το Sidebar, τσεκάρουμε τους servers
useEffect(() => {
  if (isSidebarOpen) {
    getSystemsStatus().then(data => {
      if (data) setStatus(data);
    });
  }
}, [isSidebarOpen]);
  };

  return (
    <Router>
      <div className="app-container bg-[#050505] min-h-screen text-white font-sans">
        
        {/* --- Floating Nav (Τώρα παντού) --- */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full flex justify-between items-center shadow-lg shadow-black/20">
            <motion.span 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="font-black text-xl tracking-tighter italic text-white"
            >
              <Link to="/">
                THE B<span style={{ color: mLightBlue }}>EAM</span>ERS<span style={{ color: mRed }}>.</span>
              </Link>
            </motion.span>
            
            <div className="hidden md:flex gap-8 text-[10px] font-black tracking-[0.2em] uppercase">
              <Link to="/" className="transition-colors hover:text-white text-gray-400">HOME</Link>
              <Link to="/gallery" className="transition-colors hover:text-white text-gray-400">CLOUD</Link>
              <a href="#" className="transition-colors hover:text-white text-gray-400">MEDIA</a>
            </div>

            <button onClick={() => setIsSidebarOpen(true)} className="group flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block text-gray-500">Access</span>
              <ZapIcon />
            </button>
          </div>
        </nav>

        {/* --- Sidebar Menu --- */}
        <AnimatePresence>
                {isSidebarOpen && (
                  <>
                    <motion.div 
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      onClick={() => setIsSidebarOpen(false)}
                      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[110]"
                    />
                    <motion.div 
                      initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                      className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-[#0a0a0a] z-[120] p-12 flex flex-col border-l border-white/5 shadow-2xl shadow-black/50"
                    >
                      <div className="flex justify-between items-end mb-16">
                        <h2 className="text-5xl font-black italic tracking-tighter text-white">MENU</h2>
                        {/* Το XIcon κλείνει, το κάνουμε Red στο hover */}
                        <div className="cursor-pointer hover:rotate-90 transition-transform text-gray-500 hover:text-red-600" onClick={() => setIsSidebarOpen(false)}>
                          <XIcon />
                        </div>
                      </div>
                      
                      <div className="flex-grow space-y-10">
                        <Link to="/" onClick={() => setIsSidebarOpen(false)} className="group cursor-pointer block text-left">
                            <p className="text-[10px] font-bold mb-3 uppercase tracking-[0.3em]" style={{ color: mLightBlue }}>Navigation</p>
                            <h4 className="text-4xl font-black uppercase italic group-hover:translate-x-2 transition-transform text-white">Home</h4>
                        </Link>
        
                        <Link to="/gallery" onClick={() => setIsSidebarOpen(false)} className="group cursor-pointer block text-left">
                            <p className="text-[10px] font-bold mb-3 uppercase tracking-[0.3em]" style={{ color: mRed }}>Syndicate Cloud</p>
                            <h4 className="text-4xl font-black uppercase italic group-hover:translate-x-2 transition-transform text-white">Gallery</h4>
                        </Link>
                        <div className="group cursor-pointer text-left" onClick={copyIP}>
                          <p className="text-[10px] font-bold mb-3 uppercase tracking-[0.3em]" style={{ color: mLightBlue }}>Quick Action</p>
                          <h4 className="text-4xl font-black uppercase italic group-hover:translate-x-2 transition-transform underline decoration-white/10 text-white">Copy IP Address</h4>
                        </div>
                        <div className="group cursor-pointer text-left">
                          <p className="text-[10px] font-bold mb-3 uppercase tracking-[0.3em]" style={{ color: mDarkBlue }}>Communication</p>
                          <h4 className="text-4xl font-black uppercase italic group-hover:translate-x-2 transition-transform text-white">Join Discord</h4>
                        </div>
                        <div className="group cursor-pointer text-left">
                          <p className="text-[10px] font-bold mb-3 uppercase tracking-[0.3em]" style={{ color: mRed }}>Support</p>
                          <h4 className="text-4xl font-black uppercase italic group-hover:translate-x-2 transition-transform text-white">Store</h4>
                        </div>
                      </div>
        
                      <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em] mb-5 text-left">System Monitor</p>
  
                      <div className="space-y-3">
                        {/* Status για Minecraft */}
                        <div className="flex items-center justify-between bg-black/30 p-4 rounded-xl border border-white/5">
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${status.minecraft?.online ? 'bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]' : 'bg-red-500'}`} />
                            <span className="text-xs font-bold uppercase tracking-widest text-white">Minecraft Server</span>
                          </div>
                          {status.minecraft?.online && (
                            <span className="text-[10px] text-gray-500 font-black">{status.minecraft.players} PLAYERS</span>
                          )}
                        </div>

                        {/* Status για Cloud */}
                        <div className="flex items-center justify-between bg-black/30 p-4 rounded-xl border border-white/5">
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${status.cloud?.online ? 'bg-blue-500 animate-pulse shadow-[0_0_10px_#009BDA]' : 'bg-red-500'}`} />
                            <span className="text-xs font-bold uppercase tracking-widest text-white">Syndicate Cloud</span>
                          </div>
                          <span className="text-[10px] text-gray-500 font-black">{status.cloud?.online ? 'STABLE' : 'OFFLINE'}</span>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

        {/* --- Content Area --- */}
        <div className="pt-24"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<SyndicateGallery />} />
          </Routes>
        </div>

        <footer className="py-10 text-center opacity-20 text-[10px] tracking-[0.5em]">
          © 2026 THE BEAMERS PROJECT | ALPINO FAMILY
        </footer>
      </div>
    </Router>
  );
}

export default App;