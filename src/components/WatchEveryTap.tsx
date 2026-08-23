import parentImg from "../assets/parent.png"
const WatchEveryTap = () => {
  return (
    <section className="relative bg-[#fcfcfc] py-24 md:py-32 overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] text-[#e8e8e8] pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
        </svg>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
        
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100/50">
            <img 
              src={parentImg} 
              alt="Parent using phone" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div className="space-y-8 pr-4">
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight text-[#10252a] leading-[1.1]">
            You don't need to watch every tap.
          </h2>
          
          <p className="text-gray-800 text-2xl md:text-3xl font-medium leading-[1.4] max-w-[540px]">
            Set missions, create rewards, <span className="text-[#ff6e03]">see progress, celebrate the wins</span> — while your child gets the space to explore and grow.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default WatchEveryTap;
