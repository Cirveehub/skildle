

const FinalCTA = () => {
  return (
    <section id="coming-soon" className="relative bg-custom-blue pt-24 pb-48 px-4 md:px-8 overflow-hidden z-0">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path d="M-100 200 C 400 -100 1000 300 1540 100" stroke="white" strokeWidth="40" strokeLinecap="round"/>
          <path d="M-100 800 C 400 900 1000 600 1540 700" stroke="white" strokeWidth="60" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="max-w-300 mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        
        <div className="w-full bg-custom-yellow rounded-[40px] py-20 px-8 md:px-16 text-center shadow-sm mb-32 transition-transform hover:-translate-y-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-transparent mb-2">
            <div className="w-2 h-2 rounded-full bg-custom-orange"></div>
            <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">After class, there's Skildle</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-custom-black leading-tight mb-4 max-w-3xl mx-auto">
            School's over for the day. Curiosity isn't.
          </h2>
          
          <p className="text-gray-800 text-lg md:text-xl font-medium">
            Skildle gives that time somewhere better to go.
          </p>
        </div>

        {/* Coming Soon  */}
        <div className="text-center w-full max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white mb-8">
            <div className="w-2 h-2 rounded-full bg-custom-green"></div>
            <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Coming Soon</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-16">
            Give Their Screen Time<br />Something Better To Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-4xl p-10 flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <path d="M5 4L19 12L5 20V4Z" fill="#fcff00"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Google Play</h3>
              <p className="text-gray-500 text-sm mb-8">Skildle is coming to Android devices</p>
              <div className="px-4 py-1.5 bg-green-50 text-custom-green text-xs font-bold rounded-full uppercase tracking-wider">
                Coming Soon
              </div>
            </div>

            <div className="bg-white rounded-4xl p-10 flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-custom-orange">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM16 14.5C16 11.5 18 10 18 10C16.5 8 14.5 8 14 8C12.5 8 11.5 9 10 9C8.5 9 7.5 8 6 8C4.5 8 2 9.5 2 14.5C2 17.5 4 22 6 22C7.5 22 8.5 21 10 21C11.5 21 12.5 22 14 22C16 22 18 17.5 18 17.5C18 17.5 16 16.5 16 14.5Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">App Store</h3>
              <p className="text-gray-500 text-sm mb-8">Skildle is coming to Apple Users</p>
              <div className="px-4 py-1.5 bg-green-50 text-custom-green text-xs font-bold rounded-full uppercase tracking-wider">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
