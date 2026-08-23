import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ScreenTime from "../components/ScreenTime";
import Features from "../components/Features";
import Mission from "../components/Mission";
import ParentJoin from "../components/ParentJoin";
import Earn from "../components/Earn";
import Journal from "../components/Journal";
import WatchEveryTap from "../components/WatchEveryTap";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import WaitlistModal from "../components/WaitlistModal";

const Homepage = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsWaitlistOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans">
      <Navbar onOpenWaitlist={openWaitlist} />
      <Hero onOpenWaitlist={openWaitlist} />
      <ScreenTime />
      <Features />
      <Mission />
      <ParentJoin />
      <Earn />
      <Journal />
      <WatchEveryTap />
      <FinalCTA />
      <Footer onOpenWaitlist={openWaitlist} />

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </div>
  );
};

export default Homepage;
