import { motion } from "framer-motion";
import heroImg from "../assets/heroImg.png";

const marqueeWords = [
  "PLAY",
  "ASK",
  "DISCOVER",
  "READ",
  "BUILD",
  "EARN",
];

interface HeroProps {
  onOpenWaitlist?: (e?: React.MouseEvent) => void;
}

const Hero = ({ onOpenWaitlist }: HeroProps) => {
  return (
    <section className="w-full bg-white overflow-hidden pt-24">
      <div className=" pl-4 md:pl-38 pt-8 lg:pt-10 relative">
        {/* Desktop View */}
        <div className="hidden lg:flex flex-row items-start gap-0 relative min-h-[540px]">
          <div className="relative z-10 w-[46%] pt-6 pb-10">
            <div className="flex items-center gap-2">
              <span className="block w-[7px] h-[7px] bg-custom-orange rounded-full flex-shrink-0"></span>
              <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-custom-black">
                For kids ages 6–15 and their parents.
              </span>
            </div>

            <h1 className="font-heading font-black text-[132px] leading-[0.89] tracking-[-0.03em] text-custom-black mb-4 mt-6">
              Turn Idle
              <br />
              Time Into
              <br />
              <span className="text-custom-orange">Skill Time</span>
            </h1>

            <div className="border-l-[3px] border-custom-black pl-5 mb-5 max-w-[400px]">
              <p className="text-[13.5px] leading-[1.8] text-custom-black/70 font-normal">
                Skildle is the after-class companion that gives kids better
                things to do with their screen time — games, discovery, reading,
                real-life missions, and rewards.
              </p>
            </div>

            <a
              href="#early-access"
              onClick={onOpenWaitlist}
              className="inline-flex items-center gap-3 bg-custom-black text-white text-[14px] font-semibold px-6 py-3 rounded-full hover:bg-custom-black-light transition-colors duration-200"
            >
              Get Early Access
              <span className="flex items-center justify-center w-[26px] h-[26px] bg-[#fcff00] rounded-full">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="black"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Right  */}
          <div className="absolute right-0 bottom-[20px] w-[65%] h-full flex items-end justify-end overflow-visible pointer-events-none">
            {/*  circle  */}
            <div
              className="absolute bg-custom-orange rounded-full pointer-events-auto"
              style={{
                width: "500px",
                height: "500px",
                right: "-80px",
                bottom: "100px",
                zIndex: 0,
              }}
            ></div>

            <div
              className="absolute z-20 flex items-center justify-center pointer-events-auto"
              style={{ top: "7%", left: "16%", transform: "rotate(-24deg)" }}
            >
              <div className="relative w-[140px] h-[66px] rounded-[50%] border-1 border-black flex items-center justify-center overflow-hidden">
                <div className="absolute w-[66px] h-[66px] rounded-full bg-[#0391ff] border-1 border-black flex items-center justify-center">
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 6,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  >
                    <path
                      d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z"
                      fill="black"
                    />
                  </motion.svg>
                </div>
              </div>
            </div>

            {/*  Image */}
            <img
              src={heroImg}
              alt="Happy kids using Skildle on their phones"
              className="relative z-10 w-full max-w-[650px] h-auto object-contain object-bottom pointer-events-auto"
              style={{ marginBottom: "-10px" }}
            />
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex lg:hidden flex-col items-start relative w-full pt-2 px-2 md:px-0">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-[6px] h-[6px] bg-custom-orange rounded-full flex-shrink-0"></span>
            <span className="text-[10px] md:text-[12px] font-bold tracking-[0.12em] uppercase text-custom-black">
              For kids ages 6–15 and their parents.
            </span>
          </div>

          <h1 className="font-heading font-black text-[56px] md:text-[72px] leading-[0.95] tracking-[-0.03em] text-custom-black mb-6">
            Turn Idle<br />Time Into<br /><span className="text-custom-orange">Skill Time</span>
          </h1>

          <div className="border-l-[3px] border-custom-black pl-4 mb-8 max-w-[400px]">
            <p className="text-[14px] md:text-[16px] leading-[1.6] text-custom-black/80 font-medium">
              Skildle is the after-class companion that gives kids better
              things to do with their screen time — games, discovery, reading,
              real-life missions, and rewards.
            </p>
          </div>

          <a
            href="#early-access"
            onClick={onOpenWaitlist}
            className="inline-flex items-center gap-3 bg-custom-black text-white text-[14px] font-semibold px-6 py-3 rounded-full hover:bg-black transition-colors duration-200 z-20 relative"
          >
            Get Early Access
            <span className="flex items-center justify-center w-[26px] h-[26px] bg-[#fcff00] rounded-full">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          <div className="relative w-full flex items-end justify-center mt-12 pt-12 overflow-visible">
            {/*  Circle */}
            <div className="absolute bg-custom-orange rounded-full w-[280px] h-[280px] md:w-[400px] md:h-[400px] -bottom-[20px] md:-bottom-[40px] -right-[10%] z-0"></div>
            
            {/*  Star */}
            <div className="absolute top-0 left-[5%] md:left-[20%] z-20" style={{ transform: "rotate(-15deg)" }}>
              <div className="relative w-[100px] h-[48px] rounded-[50%] border-1 border-black flex items-center justify-center overflow-hidden">
                <div className="absolute w-[48px] h-[48px] rounded-full bg-[#0391ff] border-1 border-black flex items-center justify-center">
                  <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" animate={{ rotate: 360 }} transition={{ duration: 6, ease: "linear", repeat: Infinity }}>
                    <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z" fill="black" />
                  </motion.svg>
                </div>
              </div>
            </div>

            {/*  Image */}
            <img src={heroImg} alt="Kids" className="relative z-10 w-[95%] max-w-[450px] h-auto object-contain" />
          </div>
        </div>
      </div>

      {/*  Marquee */}
      <div className="relative z-30 w-full bg-custom-black py-6 overflow-hidden">
        <div className="flex animate-marquee-slow md:animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center shrink-0">
              {marqueeWords.map((word, i) => (
                <div key={`${setIndex}-${i}`} className="flex items-center">
                  <span className="text-white text-[40px] font-bold tracking-[0.08em] uppercase mx-3">
                    ✦
                  </span>
                  <span className="text-white text-[40px] font-bold tracking-[0.08em] uppercase">
                    {word}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
