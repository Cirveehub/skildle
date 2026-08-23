import { useRef, useState, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import shoe from "../assets/shoe.svg"
import parentImg from "../assets/parent.png"

const ParentJoin = () => {
  const timelineTasks = [
    {
      id: 1,
      title: 'Finish your homework',
      points: '+100',
      isActive: true,
    },
    {
      id: 2,
      title: 'Wash the dishes',
      points: '+100',
      isActive: false,
    },
    {
      id: 3,
      title: 'Clean your room',
      points: '+100',
      isActive: false,
    },
    {
      id: 4,
      title: 'Take out the trash',
      points: '+100',
      isActive: false,
    }
  ];

  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [activeIndex, setActiveIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [hasReachedTrophy, setHasReachedTrophy] = useState(false);
  const autoPlayTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (isSectionInView) {
      let currentStep = 0;
      
      autoPlayTimerRef.current = setInterval(() => {
        currentStep++;
        if (currentStep <= timelineTasks.length) {
          setActiveIndex(currentStep);
        } else {
          clearInterval(autoPlayTimerRef.current);
        }
      }, 1000); // 1 second per step

      return () => clearInterval(autoPlayTimerRef.current);
    }
  }, [isSectionInView, timelineTasks.length]);

  useEffect(() => {
    if (activeIndex === timelineTasks.length && !hasReachedTrophy) {
      setHasReachedTrophy(true);
    }
  }, [activeIndex, timelineTasks.length, hasReachedTrophy]);

  useEffect(() => {
    if (hasReachedTrophy) {
      const controls = animate(0, 64, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (value) => setCount(Math.round(value))
      });
      return () => controls.stop();
    }
  }, [hasReachedTrophy]);

  return (
    <section ref={sectionRef} className="py-24 px-4 md:px-8 max-w-325 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white">
            <div className="w-2 h-2 rounded-full bg-custom-orange"></div>
            <span className="text-sm font-medium text-gray-700">From screen time to real life</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-custom-black leading-tight">
            Parent can Join in
          </h2>
          
          <p className="text-gray-600 text-md">
            Create missions for your child, attach rewards that matter to them.
          </p>

          <div className="relative mt-8 rounded-xl overflow-hidden shadow-2xl h-100 md:h-120">
            <img 
              src={parentImg} 
              alt="Parent creating missions" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-1.5 flex gap-1.5">
              <div className="flex-1 bg-[#fcff00] rounded-full"></div>
              <div className="flex-1 bg-white/40 rounded-full"></div>
              <div className="flex-1 bg-white/40 rounded-full"></div>
              <div className="flex-1 bg-white/40 rounded-full"></div>
              <div className="flex-1 bg-white/40 rounded-full"></div>
            </div> */}
          </div>
        </div>

        {/* Right Side */}
        <div className="relative pl-10 md:pl-14">
          <div className="absolute left-5 md:left-7 top-8 md:top-9 bottom-25 w-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>

          <div className="space-y-4 md:space-y-5">
            {timelineTasks.map((task, index) => {
              const isActive = index === activeIndex;
              return (
              <div 
                key={task.id} 
                className="relative"
              >
                {((isActive && index < timelineTasks.length - 1) || (activeIndex === timelineTasks.length && index === timelineTasks.length - 1)) && (
                  <motion.div 
                    layoutId="activeLine"
                    className={`absolute -left-5 md:-left-7 top-1/2 w-0.5 bg-custom-orange -translate-x-1/2 z-10 ${
                      index === timelineTasks.length - 1 
                        ? 'h-25 md:h-30' 
                        : 'h-[calc(100%+16px)] md:h-[calc(100%+20px)]'
                    }`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                <div className="absolute -left-5 md:-left-7 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-200 z-10"></div>
                
                {isActive && (
                  <motion.div 
                    layoutId="activeDot"
                    className="absolute -left-5 md:-left-7 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-custom-orange z-20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Task Card */}
                <div className={`bg-white rounded-3xl p-5 md:p-6 flex justify-between items-center transition-all duration-300 ${
                  isActive ? 'border border-custom-orange shadow-[0_4px_20px_rgba(255,110,3,0.15)] -translate-y-1' : 'border border-gray-100 shadow-sm'
                }`}>
                  <span className={`font-medium text-[15px] md:text-[16px] transition-colors duration-300 ${
                    isActive ? 'text-gray-900' : 'text-gray-500'
                  }`}>{task.title}</span>
                  <span className={`px-4 py-1.5 bg-orange-50 text-custom-orange text-[13px] font-bold rounded-full transition-opacity duration-300 ${
                    isActive ? 'border border-orange-200 opacity-100' : 'border border-transparent opacity-50'
                  }`}>{task.points}</span>
                </div>
              </div>
            )})}

            <div 
              className="relative mt-8 md:mt-10 pt-4" 
            >
               <div className="absolute -left-5 md:-left-7 top-[55%] -translate-y-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full z-10">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 w-4 h-4">
                    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                 </svg>
               </div>

               {activeIndex === timelineTasks.length && (
                 <motion.div 
                    layoutId="activeDot"
                    className="absolute -left-5 md:-left-7 top-[55%] -translate-y-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-custom-orange rounded-full z-20 text-white"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                 >
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                   </svg>
                 </motion.div>
               )}
               
              <div className={`bg-custom-orange rounded-xl px-5 md:px-6 pt-2 pb-3 shadow-[0_10px_30px_rgba(255,110,3,0.3)] text-white transition-transform duration-300 relative z-10 ${
                activeIndex === timelineTasks.length ? '-translate-y-1' : ''
              }`}>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-3 text-black">
                    <img src={shoe} alt="" className='' />
                    <span className="font-semibold text-sm tracking-tight">Christmas Sneakers</span>
                  </div>
                  <span className="font-bold text-lg text-black">{count}%</span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-2 overflow-hidden">
                  <motion.div 
                    className="bg-custom-yellow text-black h-full rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: hasReachedTrophy ? "64%" : "0%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentJoin;
