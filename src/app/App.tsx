import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Layouts/Navbar";
import MobileNavBar from "../components/Layouts/MobileNavBar";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import AboutDesktop from "../pages/About/AboutDesktop";
import github from "../assets/icons/Github.svg";
import Linkedin from "../assets/icons/Linkedin.svg";
import ContactForm from "../pages/Contact/ContactForm";
import ScrollReveal from "../utils/Reveal";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // const handleAddProject = () => {
  //   // Logic to update your project list, or any other necessary action
  //   console.log("A project has been added.");
  // };

  return (
    <>
      <div className="container-fluid bg scroll-smooth">
        <div className="w-full md:grid md:grid-cols-[10%_90%] lg:grid lg:grid-cols-[5%_95%]">
          {isMobile ? <MobileNavBar /> : <Navbar />}
          <div
            className={`p-3 min-vh-100 ${
              isMobile ? "w-full" : "md:col-span-[90%]"
            }`}
          >
            {!isMobile && (
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/mahfuz-chowdhury-84708029b/"><img src={Linkedin} alt="LinkedIn Icon" /></a>
                <a href="https://github.com/MC-161"><img src={github} alt="GitHub Icon" /></a>
              </div>
            )}
            {isMobile ? undefined : (
              <a href="https://docs.google.com/document/d/1eeTjJxcdA8bu8oaTDf2u6aHUrZer-X85/edit?usp=sharing&ouid=117556593194738036384&rtpof=true&sd=true"><button className="bg-black p-2 border-2 border-[rgb(126,225,102)] text-[rgb(126,225,102)] font-serif absolute top-3 right-4">
              My Resume
            </button></a>
            )}
            <Home />
            <div ref={aboutRef}>
              <ScrollReveal>
                {isMobile ? <About /> : <AboutDesktop />}
              </ScrollReveal>
            </div>
            <div ref={projectsRef}>
                <Projects />
            </div>
            <div ref={contactRef} id="contact">
              <ScrollReveal>
                <div className="mt-80 mb-80 flex justify-center w-100">
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
