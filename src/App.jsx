import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- BULLETPROOF SVG ICONS (Δεν χρειάζονται βιβλιοθήκες) ---
const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
)
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
)
const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17Z"/><path d="m10 15 5-3-5-3z"/></svg>
)
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
)
const MoveRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
)

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const features = [
    { id: 1, name: 'MINECRAFT SERVER', tag: '01', desc: 'Survival V1.21.1 / Custom Economy.', type: 'SERVER' },
    { id: 2, name: 'COMMUNITY HUB', tag: '02', desc: 'Join the Alpino Family Syndicate.', type: 'SOCIAL' },
    { id: 3, name: 'BEAMERS ARCHIVE', tag: '03', desc: 'Watch the latest highlights.', type: 'MEDIA' },
  ];

  const copyIP = () => {
    navigator.clipboard.writeText("play.thebeamersprojectv1.com");
    alert("IP Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#f87171] overflow-x-hidden">
      
      {/* --- Floating Nav --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-black text-xl tracking-tighter italic text-white"
          >
            BEAMERS<span className="text-[#f87171]">.</span>
          </motion.span>
          
          <div className="hidden md:flex gap-8 text-[10px] font-black tracking-[0.2em] uppercase">
            <a href="#" className="hover:text-[#f87171] transition-colors">Server</a>
            <a href="#" className="hover:text-[#f87171] transition-colors">Syndicate</a>
            <a href="#" className="hover:text-[#f87171] transition-colors">Media</a>
          </div>

          <button onClick={() => setIsSidebarOpen(true)} className="group flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block italic group-hover:text-[#f87171] transition-colors text-gray-400">Access</span>
            <div className="text-[#f87171]"><ZapIcon /></div>
          </button>
        </div>
      </nav>

      {/* --- Sidebar --- */}
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
              className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-[#0a0a0a] z-[120] p-12 flex flex-col border-l border-white/5"
            >
              <div className="flex justify-between items-end mb-12">
                <h2 className="text-5xl font-black italic tracking-tighter">MENU</h2>
                <div className="cursor-pointer hover:rotate-90 transition-transform text-[#f87171]" onClick={() => setIsSidebarOpen(false)}>
                  <XIcon />
                </div>
              </div>
              
              <div className="flex-grow space-y-8">
                <div className="group cursor-pointer text-left" onClick={copyIP}>
                  <p className="text-[10px] text-[#f87171] font-bold mb-2 uppercase tracking-[0.3em]">Quick Action</p>
                  <h4 className="text-3xl font-bold uppercase italic group-hover:translate-x-2 transition-transform underline decoration-white/10">Copy IP Address</h4>
                </div>
                <div className="group cursor-pointer text-left">
                  <p className="text-[10px] text-[#f87171] font-bold mb-2 uppercase tracking-[0.3em]">Communication</p>
                  <h4 className="text-3xl font-bold uppercase italic group-hover:translate-x-2 transition-transform">Join Discord</h4>
                </div>
              </div>

              <div className="pt-10 border-t border-white/5">
                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em] mb-4 text-left">Status</p>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold opacity-70 uppercase tracking-widest text-white">Online</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-4">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
          <span className="text-[25vw] font-black text-white/[0.02] uppercase select-none">SYNDICATE</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="text-[12vw] font-black leading-none tracking-tighter text-center uppercase z-10"
        >
          B<span className="text-[#f87171] italic underline decoration-white/20">EAM</span>ERS
        </motion.h1>
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="z-10 mt-8 flex flex-col items-center text-center"
        >
          <p className="text-[10px] tracking-[0.6em] text-gray-500 uppercase mb-8 italic font-bold">Member of the Alpino Family Syndicate</p>
          <div className="w-px h-24 bg-gradient-to-b from-[#f87171] to-transparent shadow-[0_0_15px_#f87171]"></div>
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f87171]/5 blur-[180px] rounded-full" />
      </section>

      {/* --- Marquee --- */}
      <div className="bg-[#f87171] py-5 overflow-hidden whitespace-nowrap border-y border-[#f87171]">
        <motion.div 
          animate={{ x: [0, -1500] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-black font-black text-3xl tracking-tighter mx-8 uppercase italic">
              * JOIN THE SYNDICATE * SERVER LIVE V1.21.1 * NO LIMITS * ALPINO FAMILY * THE BEAMERS PROJECT
            </span>
          ))}
        </motion.div>
      </div>

      {/* --- Bento Grid --- */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-white/5 pb-10 text-left">
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter italic uppercase leading-[0.8]">
            THE <br/> <span className="text-[#f87171]">CORE.</span>
          </h2>
          <p className="max-w-xs text-[10px] tracking-[0.3em] text-gray-500 uppercase leading-loose font-bold">
            Urban architectural digital experience designed for the competitive soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
          {features.map((item, i) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -10, scale: 1.01 }}
              className={`relative bg-[#0e0e0e] border border-white/5 p-10 overflow-hidden group transition-colors hover:border-[#f87171]/30 ${
                i === 0 ? 'md:col-span-8' : 'md:col-span-4'
              }`}
            >
              <span className="text-[80px] font-black text-white/[0.03] absolute -right-4 -top-8 italic group-hover:text-[#f87171]/10 transition-colors">
                {item.tag}
              </span>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-1.5 bg-[#f87171] rounded-full" />
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#f87171]">{item.type}</span>
                  </div>
                  <h3 className="text-4xl font-black italic uppercase mb-4 tracking-tighter group-hover:text-[#f87171] transition-colors italic text-white">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-10 uppercase tracking-widest font-medium leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </div>
                <button onClick={item.type === 'SERVER' ? copyIP : undefined} className="flex items-center gap-6 group/btn mt-auto">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover/btn:bg-[#f87171] group-hover/btn:rotate-[-45deg] transition-all duration-500">
                    <div className="text-black group-hover/btn:text-white transition-colors"><MoveRightIcon /></div>
                  </div>
                  <span className="font-black text-xs tracking-[0.4em] uppercase group-hover:text-[#f87171] transition-colors text-white">
                    Explore
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-32 px-12 border-t border-white/5 text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div>
            <h4 className="font-black italic text-5xl tracking-tighter mb-6 text-white">
              BEAMERS<span className="text-[#f87171]">.</span>
            </h4>
            <div className="flex gap-4">
               <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-[#f87171] transition-colors cursor-pointer text-white">
                 <YoutubeIcon />
               </div>
               <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-[#f87171] transition-colors cursor-pointer text-white">
                 <InstagramIcon />
               </div>
            </div>
          </div>
          <div className="flex gap-20">
            <div className="space-y-4">
              <p className="text-[10px] font-black tracking-[0.4em] uppercase text-[#f87171] mb-6">Syndicate</p>
              <a className="block text-xs font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity text-white">Rules</a>
              <a className="block text-xs font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity text-white">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;