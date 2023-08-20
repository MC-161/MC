import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import swipe from '../../../assets/swipe.svg'

const SwipeArrow = () => {
  const [visible, setVisible] = useState(true);
  const controls = useAnimation();

  // Function to handle scrolling
  const handleScroll = () => {
    if (window.scrollY > 100) {
      controls.start({ opacity: 1, transition: { duration: 0.5 } });
      setVisible(false);
    } else {
      controls.start({ opacity: 1, transition: { duration: 0.5 } });
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="swipe-arrow mt-[8rem]  animate-bounce"
      initial={{ opacity: 1 }}
      animate={controls}
      style={{ opacity: visible ? '1' : '1' }}
    >
      <img src={swipe} alt="" />
    </motion.div>
  );
};

export default SwipeArrow;
