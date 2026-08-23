import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skildleLogo from "../assets/skidlelogo.svg";

const navLinks = [
  { label: "Why Skildle", href: "#why-skildle" },
  { label: "Features", href: "#features" },
  { label: "Missions", href: "#missions" },
  { label: "Coming Soon", href: "#coming-soon" },
];

interface NavbarProps {
  onOpenWaitlist?: (e?: React.MouseEvent) => void;
}

const Navbar = ({ onOpenWaitlist }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-4 md:top-6 z-50">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-[72px] px-6 md:px-8 bg-white rounded-full shadow-[0px_11px_4px_0px_rgba(0,0,0,0.07)] relative z-50">
          {/* logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src={skildleLogo}
              alt="Skildle"
              className="h-[32px] w-auto"
            />
          </a>

          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[14px] font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#waitlist"
            onClick={onOpenWaitlist}
            className="hidden md:inline-flex items-center justify-center px-7 py-3 bg-[#0a0a0a] text-white text-[14px] font-bold rounded-full hover:bg-black hover:scale-105 transition-all duration-200 shadow-sm"
          >
            Join the Waitlist
          </a>

          {/*  Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2 w-10 h-10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-black rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>

        {/* Mobile  */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[84px] left-6 right-6 md:hidden bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6 z-40"
            >
              <ul className="flex flex-col gap-6 items-center">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-[16px] font-medium text-gray-700 hover:text-black transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#waitlist"
                    onClick={(e) => {
                      setIsOpen(false);
                      if (onOpenWaitlist) onOpenWaitlist(e);
                    }}
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-black text-white text-[15px] font-bold rounded-full shadow-sm w-full mt-2"
                  >
                    Join the Waitlist
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
