import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import img from "../assets/lookphone.png";

const ScreenTime = () => {
  const controls = useAnimation();

  useEffect(() => {
    let isMounted = true;
    const gridPoints = [12, 36, 60, 84, 108, 132, 156];

    const moveBall = async () => {
      let currentX = 12;
      let currentY = 12;

      while (isMounted) {
        const moveHorizontally = Math.random() > 0.5;
        let nextX = currentX;
        let nextY = currentY;

        if (moveHorizontally) {
          const possibleX = gridPoints.filter(x => x !== currentX);
          nextX = possibleX[Math.floor(Math.random() * possibleX.length)];
        } else {
          const possibleY = gridPoints.filter(y => y !== currentY);
          nextY = possibleY[Math.floor(Math.random() * possibleY.length)];
        }
        
        const distance = Math.abs(nextX - currentX) + Math.abs(nextY - currentY);
        const duration = distance * 0.02; 
        
        await controls.start({
          cx: nextX,
          cy: nextY,
          transition: { duration: duration, ease: "linear" }
        });
        
        currentX = nextX;
        currentY = nextY;
        
        await new Promise((resolve) => setTimeout(resolve, 300)); 
      }
    };

    controls.set({ cx: 12, cy: 12 });
    moveBall();

    return () => {
      isMounted = false;
    };
  }, [controls]);

  return (
    <section id="why-skildle" className="relative w-full bg-[#fdfdfd] py-20 lg:py-32 overflow-hidden">
      <div className="absolute top-8 right-8 lg:right-40 opacity-70">
        <svg
          width="160"
          height="160"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="dots"
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="12" cy="12" r="2.5" fill="#c3e4cd" />
          </pattern>
          <rect width="160" height="160" fill="url(#dots)" />
          
          {/* moving ball */}
          <motion.circle
            r="6"
            fill="#fcff00"
            animate={controls}
          />
        </svg>
      </div>

      <motion.div 
        className="max-w-250 mx-auto px-4 md:px-8 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="font-heading font-bold text-[36px] md:text-[52px] text-custom-black mb-4 tracking-tight">
          Screen Time Can Be More
        </h2>

        <div className="text-[20px] md:text-[25px] leading-[1.65] text-custom-black/90 font-medium">
          Kids are growing up with screens. Instead of just{" "}
          <br className="hidden md:block" />
          taking them away — what if we gave kids{" "}
          <span className="text-custom-orange font-normal">
            better{" "}
            <br className="hidden md:block" />
            things to do with them?
          </span>
          <motion.span 
            className="inline-flex align-middle mx-3 w-19 h-9 md:w-21.5 md:h-10.5 bg-black rounded-full overflow-hidden relative justify-center items-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src={img}
              alt="Kid on phone"
              className="w-full h-full  object-cover object-fit"
              style={{ objectPosition: "45% 20%", transform: "scale(2.5)" }}
            />
          </motion.span>
          Skildle turns idle{" "}
          <br className="hidden md:block" />
          moments into time to think, discover, create, and{" "}
          <br className="hidden md:block" />
          grow. Without making after-class feel like more{" "}
          <br className="hidden md:block" />
          school.
        </div>
      </motion.div>
    </section>
  );
};

export default ScreenTime;
