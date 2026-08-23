import React from 'react';
import skildleLogo from '../assets/ogowhite.svg';

interface FooterProps {
  onOpenWaitlist?: (e?: React.MouseEvent) => void;
}

const Footer = ({ onOpenWaitlist }: FooterProps) => {
  return (
    <footer className="relative bg-[#101010] text-white pt-24 pb-8">
      <div className="absolute top-0 left-0 w-full h-50 bg-custom-blue z-0"></div>

      <div className="max-w-325 mx-auto px-4 md:px-8 relative z-10 pt-12 pb-12">
        
        <div className="bg-[#050505] rounded-4xl md:rounded-[48px] py-16 md:py-24 px-8 md:px-16 text-center shadow-2xl mb-24 border border-white/5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1c1c] mb-8">
            <div className="w-2 h-2 rounded-full bg-custom-yellow"></div>
            <span className="text-xs font-bold text-white/90 uppercase tracking-wider">After class, there's Skildle</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.1] mb-6 max-w-2xl mx-auto">
            Turning kids' idle time into skill time.
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl font-medium mb-12">
            Be among the first families to experience Skildle.
          </p>

          <button 
            onClick={onOpenWaitlist}
            className="inline-flex items-center gap-3 bg-custom-yellow text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:-translate-y-1 transition-all duration-300"
          >
            Join the Waitlist
            <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
                <path d="M5 19L19 5M19 5V19M19 5H5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-custom-yellow"/>
              </svg>
            </div>
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 px-4 md:px-8">
          <img src={skildleLogo} alt="Skildle" className="w-32 h-auto" />
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <a href="#" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">Why Skildle</a>
            <a href="#" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">Missions</a>
            <a href="#" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">Coming Soon</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-16 flex flex-col items-center justify-center relative overflow-hidden">
          <h1 className="text-[120px] md:text-[200px] lg:text-[260px] font-black tracking-tighter text-white/3 leading-[0.8] select-none">
            SKILDLE
          </h1>
          <p className="text-white/20 text-xs md:text-sm mt-8 text-center absolute bottom-0 bg-[#101010] px-4">
            Turning kids' idle time into skill time
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
