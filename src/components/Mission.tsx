import { motion } from "framer-motion";
import heroImg from "../assets/heroImg.png";
import bookIcon from "../assets/tabler_book-filled.svg";

const Mission = () => {
  const cards = [1, 2, 3, 4]; 

  return (
    <section id="missions" className="relative w-full bg-black py-20 lg:py-28 overflow-hidden">
      <div className="absolute bottom-[-5%] left-0 w-full flex justify-center pointer-events-none overflow-hidden leading-none select-none z-0">
        <span className="font-heading font-black text-[100px] md:text-[100px] lg:text-[230px] text-white/30 w-fit whitespace-nowrap">
          OUR MISSION
        </span>
      </div>

      <div className="max-w-325 mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 lg:mb-24 gap-8">
          <motion.h2 
            className="font-heading font-bold text-[48px] lg:text-[64px] text-white tracking-tight"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Mission
          </motion.h2>
          <motion.p 
            className="text-white/80 text-[15px] lg:text-[17px] leading-[1.6] max-w-120"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The best things kids do on Skildle happen away from Skildle
            — a walk outside, a book, a drawing, helping with dinner, an
            act of kindness. Skildle turns everyday activities into
            missions worth completing.
          </motion.p>
        </div>

        {/* Cards  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((_, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-2 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              {/*  Image */}
              <div className="w-full aspect-4/5 rounded-xl overflow-hidden relative mb-4">
                <img 
                  src={heroImg} 
                  alt="Kid reading a book" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "60% 30%" }} 
                />
              </div>

              <div className="flex items-center justify-between px-3 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#9b6cf3] flex items-center justify-center">
                    <img src={bookIcon} alt="Book" className="w-5 h-5 filter invert brightness-0" style={{ filter: "brightness(0) invert(1)" }} />
                  </div>
                  <span className="text-custom-black font-semibold text-[14px]">
                    Read a book
                  </span>
                </div>
                
                <div className="flex items-center gap-1.5 bg-[#f8f9fa] px-2.5 py-1 rounded-full border border-gray-100">
                  <span className="text-[12px] font-bold text-custom-black">+50</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ffb800] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
