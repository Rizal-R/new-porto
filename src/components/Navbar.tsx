import { useState, useEffect } from "react";
import { FaLaptop } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
    className="w-full flex justify-start "
    >
      <div className={`fixed w-full sm:w-1/3 z-40 transition-all duration-300 ${
        scrolled ? "top-0" : "top-4"
      }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between bg-[#343535] p-3 rounded-2xl shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 text-white rounded-full bg-gradient-to-br from-neon-blue to-neon-pink flex items-center justify-center font-bold">
              R
            </div>
            <div className="">
              <div className="text-sm font-medium">Rizal R.</div>
              <div className="text-xs text-slate-400">Software Engineer</div>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <FaLaptop className="text-neon-blue text-2xl animate-pulse hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
      </div>
    </header>
  );
}
