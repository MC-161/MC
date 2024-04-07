import m from "../../assets/M.png";
import SwipeArrow from "./components/SwipeArrow";
import { Stack } from "@chakra-ui/react";
import { Link } from 'react-scroll';
import { motion} from "framer-motion";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 1.5 },
    },
  };
  return (
    <motion.div
      id="home"
      className="Home md:mt-20 flex flex-col justify-center items-center lg:mt-40"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="content flex flex-col items-center lg:flex-row-reverse">
        <div>
          <img src={m} className="w-[9rem] lg:w-[400px] lg:mr-4" alt="" />
        </div>
        <div className="mt-4 lg:mt-0 lg:p-20 flex flex-col items-center lg:items-start">
          <Stack
            direction="column"
            className={`lg:text-left txt`}
          >
            <h1 className="font-serif text-white text-4xl lg:text-[80px] lg:mb-10">
              Hello, I'm MC
            </h1>
            <h2 className="font-serif text-white text-3xl lg:text-5xl">
              I Make{" "}
              <span className="text-[rgb(126,225,102)]">Things Sometimes</span>
            </h2>
            <p className="text-white font-serif lg:text-[25px] lg:w-90">
              Currently studying a bachelors of science in Computer science with
              interests in Artificial Intelligence and Full stack Development.
            </p>
          </Stack>
          <Link
            to="contact" // This should match the ID of your contact section
            smooth={true}
            duration={1000}
            offset={-100} // Adjust this offset value as needed
          >
            <button className="border-1 p-2 bg-[rgb(126,225,102)] font-serif rounded-md transform hover:scale-105 active:scale-100 transition duration-300 text-black text-lg bt">
              Contact me
            </button>
          </Link>
        </div>
      </div>
      <SwipeArrow />
    </motion.div>
  );
};

export default Home;
