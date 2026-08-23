import { motion } from "framer-motion";
import gameIcon from "../assets/reicon_game-filled.svg";
import bookIcon from "../assets/book-fill.svg";
import robotIcon from "../assets/mdi_robot.svg";

const featuresData = [
  {
    id: 1,
    tag: "1. Play",
    title: "Build it. Solve it. Level up",
    description: "Assemble cars, aircraft, robots and rockets through challenges that get harder as kids progress — plus riddles, puzzles, and brain games.",
    bgColor: "bg-[#0391ff]",
    textColor: "text-black",
    descColor: "text-black/80",
    colSpan: "lg:col-span-7",
    icon: (
      <div className="w-14 h-14  rounded-full flex items-center justify-center">
        <img src={gameIcon} alt="Game icon" className="w-8 h-8" />
      </div>
    ),
  },
  {
    id: 2,
    tag: "2. Read",
    title: "Stories worth putting the screen down for.",
    description: "Age-matched stories and reads — and instead of just tapping \"Complete,\" kids reflect: what did you learn? Say it or write it, answer a few questions, pick up new words along the way.",
    bgColor: "bg-[#ff6b00]",
    textColor: "text-white",
    descColor: "text-white/90",
    colSpan: "lg:col-span-5",
    icon: (
      <div className="w-10 h-10 flex items-center justify-center">
        <img src={bookIcon} alt="Book icon" className="w-8 h-8 filter invert brightness-0" style={{ filter: "brightness(0) invert(1)" }} />
      </div>
    ),
  },
  {
    id: 3,
    tag: "3. Meet SkillGPT",
    title: "Big questions. Kid-sized answers.",
    description: "\"Why is the sky blue?\" \"How does Wi-Fi work?\" \"Can you explain my homework?\" SkillGPT answers in ways kids actually understand — by voice or text.",
    bgColor: "bg-white",
    textColor: "text-custom-black",
    descColor: "text-custom-black/80",
    colSpan: "lg:col-span-5",
    icon: (
      <div className="w-10 h-10 flex items-center justify-center">
        <img src={robotIcon} alt="Robot icon" className="w-9 h-9" />
      </div>
    ),
  },
  {
    id: 4,
    tag: "4. Discover",
    title: "There's always something new to know.",
    description: "What's happening in the world today? How does an aircraft stay in the sky? Skildle turns news, science, history, and everyday questions into short, age-friendly discoveries.",
    bgColor: "bg-[#179653]",
    textColor: "text-white",
    descColor: "text-white/90",
    colSpan: "lg:col-span-7",
    icon: (
      <div className="w-10 h-10 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z" fill="white" />
        </svg>
      </div>
    ),
  },
];

const Features = () => {
  return (
    <section id="features" className="w-full bg-[#fdfdfd] pb-16 lg:pb-24">
      <div className="max-w-325 mx-auto px-4 md:px-8">
        <motion.h2 
          className="font-heading font-bold text-[36px] md:text-[48px] lg:text-[56px] text-center text-custom-black mb-12 lg:mb-16 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          One Place. Lot of Ways to Grow
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6  auto-rows-fr">
          {featuresData.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className={`${feature.colSpan} ${feature.bgColor} rounded-3xl border-2 border-black px-5 py-6 md:px-8 flex flex-col justify-start h-full`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <div className="flex justify-between items-center mb-6 md:mb-8">
                <span className={`${feature.textColor} font-semibold text-[13px] tracking-widest uppercase`}>
                  {feature.tag}
                </span>
                {feature.icon}
              </div>
              <div>
                <h3 className={`font-heading font-bold ${feature.textColor} text-[22px] md:text-[26px] mb-2 leading-tight`}>
                  {feature.title}
                </h3>
                <p className={`${feature.descColor} text-[14px]  leading-[1.6]`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
