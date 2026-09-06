import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50
        flex h-12 w-12 items-center justify-center border-[3px] border-black
        bg-[#7EE7DC] text-black shadow-[5px_5px_0_#000]
        transition-all duration-150
        ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:translate-x-[5px] active:translate-y-[5px]
      `}
      aria-label="Back to Top"
    >
      <ChevronUp size={28} />
    </button>
  );
};

export default ScrollToTop;