

const Earn = () => {
  return (
    <section className="relative bg-custom-yellow py-24  overflow-hidden border-b-8 border-custom-green">
      {/*  Dot Pattern */}
      <div className="absolute top-4 w-75 h-75 pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="3.5" fill="#000000" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-325 mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
        {/* Image */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-112.5">
            <img 
              src="/src/assets/earn.png" 
              alt="Skildle Coin" 
              className="w-full h-auto drop-shadow-2xl transition-transform duration-500 hover:scale-105 hover:rotate-3"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl lg:text-[82px] font-bold tracking-tight text-custom-black leading-[1.1]">
            Earn. Save.<br />Achieve.
          </h2>
          
          <p className="text-custom-black text-md font-medium leading-relaxed max-w-lg">
            Kids earn Skildle Coins for meaningful activities, and save toward
            parent-approved rewards — picking up real lessons in earning, saving,
            spending, and needs vs. wants along the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Earn;
