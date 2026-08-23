import React from 'react';
import journalBg from '../assets/journalbg.png';
import journalImg from '../assets/journalimg.png';

const Journal = () => {
  return (
    <section 
      className="relative py-24 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${journalBg})` }}
    >
      <div className="absolute inset-0 bg-[#0a8a52] -z-10 opacity-0"></div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm w-fit">
            <div className="w-2 h-2 rounded-full bg-[#ff6e03]"></div>
            <span className="text-sm font-bold text-gray-900">A Little Time to Reflect</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-[76px] font-bold tracking-tight text-white leading-[1.05]">
            Meet My<br />Journal
          </h2>
          
          <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-lg pr-4">
            Growing isn't only about what you know. *How was your day? What made you smile? What are you proud of?* By voice or writing — a small daily habit, and a record of growth over time.
          </p>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-[500px]">
             <img 
              src={journalImg} 
              alt="My Journal" 
              className="w-full h-auto drop-shadow-2xl transition-transform duration-500 hover:-translate-y-2"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Journal;
