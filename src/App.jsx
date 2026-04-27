import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- BULLETPROOF SVG ICONS (Δεν χρειάζονται βιβλιοθήκες) ---
// Χρησιμοποιούμε το BMW M-Sport Light Blue για το ZapIcon
const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009BDA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
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
    { id: 3, name: 'THE BEAMERS ARCHIVE', tag: '03', desc: 'Watch the latest highlights.', type: 'MEDIA' },
  ];

  const copyIP = () => {
    navigator.clipboard.writeText("play.thebeamersprojectv1.com");
    // Ένα πιο διακριτικό notification θα ήταν ωραίο εδώ
    alert("IP Copied to clipboard!");
  };

  // BMW M Color Palette (Approximate hex codes)
  const mLightBlue = "#009BDA"; // Estoril Blue / Light Blue
  const mDarkBlue = "#0033A0";  // Le Mans Blue / Dark Blue
  const mRed = "#FF0000";       // M Red

  return (
    // selection:bg-mLightBlue για BMW αίσθηση στην επιλογή κειμένου
    <div className={`min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden`} style={{ '--selection-bg': mLightBlue }}>
      <style>{`::selection { background-color: var(--selection-bg); color: black; }`}</style>
      
      {/* --- Floating Nav --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full flex justify-between items-center shadow-lg shadow-black/20">
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-black text-xl tracking-tighter italic text-white"
          >
            THE B<span style={{ color: mLightBlue }}>EAM</span>ERS<span style={{ color: mRed }}>.</span>
          </motion.span>
          
          <div className="hidden md:flex gap-8 text-[10px] font-black tracking-[0.2em] uppercase">
            <a href="#" className="transition-colors hover:text-white text-gray-400" style={{ '--hover-color': mLightBlue }}>
              <span className="hover:style-accent">Server</span>
            </a>
            <a href="#" className="transition-colors hover:text-white text-gray-400" style={{ '--hover-color': mDarkBlue }}>
              <span className="hover:style-accent">Syndicate</span>
            </a>
            <a href="#" className="transition-colors hover:text-white text-gray-400" style={{ '--hover-color': mRed }}>
              <span className="hover:style-accent">Media</span>
            </a>
          </div>
          
          {/* Custom style inject για τα hovers */}
          <style>{`.hover\\:style-accent:hover { color: var(--hover-color); }`}</style>

          <button onClick={() => setIsSidebarOpen(true)} className="group flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block italic group-hover:text-white transition-colors text-gray-500">Access</span>
            {/* Το ZapIcon χρησιμοποιεί ήδη το mLightBlue εσωτερικά */}
            <ZapIcon />
          </button>
        </div>
      </nav>

      {/* --- Sidebar (MENU) --- */}
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
                <h2 className="text-5xl font-black italic tracking-tighter text-white">M/ENU</h2>
                {/* Το XIcon κλείνει, το κάνουμε Red στο hover */}
                <div className="cursor-pointer hover:rotate-90 transition-transform text-gray-500 hover:text-red-600" onClick={() => setIsSidebarOpen(false)}>
                  <XIcon />
                </div>
              </div>
              
              <div className="flex-grow space-y-10">
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

              <div className="pt-10 border-t border-white/5">
                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em] mb-5 text-left">System Status</p>
                <div className="flex items-center gap-3 bg-black/30 p-4 rounded-xl border border-white/5">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                  <span className="text-sm font-bold uppercase tracking-widest text-white">All Systems Online</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-4">
        {/* Background "void" text */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "circOut" }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
          <span className="text-[28vw] font-black text-white/[0.015] uppercase select-none tracking-tight">SYNDICATE</span>
        </motion.div>

        {/* Main Title - Υπογράμμιση με Red */}
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="text-[13vw] font-black leading-[0.85] tracking-tighter text-center uppercase z-10 text-white relative"
        >
          THE B<span className="italic relative">EAM<span className="absolute bottom-[-1vw] left-0 w-full h-[0.5vw] decoration-white/20 underline italic" style={{ textDecorationColor: mRed }}></span></span>ERS
        </motion.h1>
        
        {/* Subtitle & Line Decorator */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="z-10 mt-12 flex flex-col items-center text-center max-w-lg"
        >
          <p className="text-[11px] tracking-[0.6em] text-gray-500 uppercase mb-10 italic font-bold leading-relaxed">High-Performance Digital Syndicate / Member of Alpino Family</p>
          {/* Η γραμμή ντεγκραντέ πηγαίνει από Light Blue σε transparent */}
          <div className="w-px h-28 bg-gradient-to-b to-transparent shadow-lg" style={{ backgroundImage: `linear-gradient(to bottom, ${mLightBlue}, transparent)`, boxShadow: `0 0 20px ${mLightBlue}` }}></div>
        </motion.div>

        {/* Ambient background glow - Dark Blue */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] blur-[200px] rounded-full pointer-events-none" style={{ backgroundColor: `${mDarkBlue}10` }} />
      </section>

      {/* --- Marquee (Gaming News) --- */}
      {/* Χρησιμοποιούμε το Dark Blue για φόντο στην ταινία */}
      <div className="py-6 overflow-hidden whitespace-nowrap border-y border-white/5" style={{ backgroundColor: mDarkBlue }}>
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          {[...Array(12)].map((_, i) => (
            <span key={i} className="text-white font-black text-4xl tracking-tighter mx-10 uppercase italic">
              * M/POWERED SERVER LIVE V1.21.1 * JOIN THE SYNDICATE * NO LIMITS * ALPINO FAMILY * THE BEAMERS PROJECT
            </span>
          ))}
        </motion.div>
      </div>

      {/* --- Bento Grid (Core Features) --- */}
      <section className="py-48 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-28 gap-10 border-b border-white/5 pb-12 text-left relative">
          <h2 className="text-8xl md:text-10xl font-black tracking-tighter italic uppercase leading-[0.8] text-white">
            THE <br/> <span style={{ color: mLightBlue }}>CORE.</span>
          </h2>
          <p className="max-w-sm text-[11px] tracking-[0.3em] text-gray-500 uppercase leading-loose font-bold bg-black/50 p-6 rounded-2xl border border-white/5">
            Urban architectural digital experience designed for the competitive soul. Power, precision, and community dominance.
          </p>
          {/* Decorative M Lines (Red) */}
          <div className="absolute bottom-[-2px] left-0 w-40 h-[4px]" style={{ backgroundColor: mRed }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          {features.map((item, i) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -12, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              // Η αύρα (glow) στο hover γίνεται Dark Blue
              className={`relative bg-[#0e0e0e] border border-white/5 p-12 overflow-hidden group transition-all duration-300 hover:border-white/10 ${
                i === 0 ? 'md:col-span-8' : 'md:col-span-4'
              }`}
              style={{ '--hover-glow': `${mDarkBlue}20` }}
            >
              {/* Injecting hover style for glow */}
              <style>{`.group:hover .card-glow { background-color: var(--hover-glow); }`}</style>
              
              <span className="text-[100px] font-black text-white/[0.02] absolute -right-6 -top-12 italic group-hover:text-white/[0.04] transition-colors duration-500">
                {item.tag}
              </span>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    {/* Dot color based on item index (alternating BMW colors) */}
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: i === 0 ? mLightBlue : (i === 1 ? mDarkBlue : mRed) }} />
                    <span className="text-[11px] font-black tracking-[0.4em] uppercase text-gray-400 group-hover:text-white transition-colors">{item.type}</span>
                  </div>
                  {/* Τίτλος γίνεται Red στο hover */}
                  <h3 className="text-5xl font-black italic uppercase mb-5 tracking-tighter transition-colors italic text-white group-hover:style-accent-title" style={{ '--title-hover': mRed }}>
                    {item.name}
                  </h3>
                  <style>{`.group:hover .group-hover\\:style-accent-title { color: var(--title-hover); }`}</style>
                  
                  <p className="text-gray-500 text-base mb-14 uppercase tracking-widest font-medium leading-relaxed max-w-sm group-hover:text-gray-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <button 
                    onClick={item.type === 'SERVER' ? copyIP : undefined}
                    className="flex items-center gap-6 group/btn"
                  >
                    {/* Το button icon γίνεται Light Blue στο hover */}
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover/btn:rotate-[-45deg] transition-all duration-500 shadow-xl" style={{ '--btn-bg-hover': mLightBlue }}>
                      <style>{`.group\\/btn:hover .group-hover\\/btn\\:bg-accent { background-color: var(--btn-bg-hover); }`}</style>
                      <div className="group-hover/btn:bg-accent p-6 rounded-full transition-colors duration-500">
                        <div className="text-black group-hover/btn:text-white transition-colors"><MoveRightIcon /></div>
                      </div>
                    </div>
                    <span className="font-black text-sm tracking-[0.4em] uppercase text-white group-hover:style-accent-btn" style={{ '--btn-text-hover': mLightBlue }}>
                      {item.type === 'SERVER' ? 'Connect / M' : 'Enter Void'}
                    </span>
                    <style>{`.group:hover .group-hover\\:style-accent-btn { color: var(--btn-text-hover); }`}</style>
                  </button>
                </div>
              </div>
              
              {/* Card Glow Effect (Dark Blue on hover) */}
              <div className="card-glow absolute -bottom-32 -right-32 w-80 h-80 blur-[120px] rounded-full transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-40 px-12 border-t border-white/5 text-left bg-gradient-to-b from-transparent to-black/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div>
            <h4 className="font-black italic text-6xl tracking-tighter mb-8 text-white relative inline-block">
              THE B<span style={{ color: mLightBlue }}>EAM</span>ERS<span style={{ color: mRed }}>.</span>
               {/* Decorative M Lines (Small) */}
               <div className="absolute bottom-[-10px] left-0 w-full h-[3px] flex">
                 <div className="flex-1" style={{ backgroundColor: mLightBlue }}></div>
                 <div className="flex-1" style={{ backgroundColor: mDarkBlue }}></div>
                 <div className="flex-1" style={{ backgroundColor: mRed }}></div>
               </div>
            </h4>
            <p className="text-[10px] text-gray-600 tracking-[0.5em] uppercase leading-relaxed font-bold max-w-xs mb-10">
              Est. 2026. Digital Syndicate operations powered by Alpino Family. High-performance gaming culture.
            </p>
            <div className="flex gap-5">
               {/* Social Icons γίνονται Red στο hover */}
               <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center transition-all cursor-pointer text-white" style={{ '--icon-hover-border': mRed, '--icon-hover-bg': `${mRed}10` }}>
                 <style>{`.w-12:hover { border-color: var(--icon-hover-border); background-color: var(--icon-hover-bg); color: ${mRed}; }`}</style>
                 <YoutubeIcon />
               </div>
               <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center transition-all cursor-pointer text-white" style={{ '--icon-hover-border': mRed, '--icon-hover-bg': `${mRed}10` }}>
                 <InstagramIcon />
               </div>
            </div>
          </div>
          
          <div className="flex gap-24 bg-black/20 p-10 rounded-3xl border border-white/5 shadow-inner">
            <div className="space-y-5">
              <p className="text-[11px] font-black tracking-[0.4em] uppercase mb-8" style={{ color: mLightBlue }}>Syndicate</p>
              {/* Links γίνονται Red στο hover */}
              <a className="block text-sm font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-all text-white" style={{ '--link-hover': mRed }}>
                <span className="hover:style-accent-link">Rules</span>
              </a>
              <a className="block text-sm font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-all text-white" style={{ '--link-hover': mRed }}>
                <span className="hover:style-accent-link">Discord</span>
              </a>
              <a className="block text-sm font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-all text-white" style={{ '--link-hover': mRed }}>
                <span className="hover:style-accent-link">Apply</span>
              </a>
            </div>
            <div className="space-y-5">
              <p className="text-[11px] font-black tracking-[0.4em] uppercase mb-8" style={{ color: mDarkBlue }}>Races</p>
              <a className="block text-sm font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-all text-white" style={{ '--link-hover': mRed }}>
                <span className="hover:style-accent-link">Events</span>
              </a>
              <a className="block text-sm font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-all text-white" style={{ '--link-hover': mRed }}>
                <span className="hover:style-accent-link">Standings</span>
              </a>
            </div>
          </div>
          <style>{`.hover\\:style-accent-link:hover { color: var(--link-hover); }`}</style>
        </div>
        
        <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left text-gray-700 p-8 rounded-2xl bg-black/10">
          <p className="text-[9px] tracking-[0.5em] uppercase font-black italic">M/Power Syndicate Operations // All Rights Reserved</p>
          <p className="text-[9px] tracking-[0.5em] uppercase font-black">Designed & Developed by Beamers Syndicate</p>
        </div>
      </footer>
    </div>
  );
};

export default App;