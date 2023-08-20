import React, { useEffect, useRef } from "react";
import { motion, useAnimation, AnimationControls, Variants } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - rect.height / 2) {
        controls.start("visible");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      animate={controls as AnimationControls}
      ref={ref}
      className="reveal"
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
