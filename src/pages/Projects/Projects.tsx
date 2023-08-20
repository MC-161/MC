import TitleWithLongUnderline from "../../utils/TitleWithUnderline";
import ProjectList from "./components/ProjectList";
import ScrollReveal from "../../utils/Reveal";

export default function Projects() {
  return (
    <div id="projects" className="Projects flex flex-col items-center mt-40 lg:mb-10 font-serif text-white">
      <ScrollReveal>
        <TitleWithLongUnderline width="w-[180%]" size="text-3xl lg:text-[40px]" title="Projects" />
      </ScrollReveal>
      <div className="mt-9 grid md:grid-cols-2 grid-cols-1 gap-20 lg:grid-cols-3 mx-auto">
        <ProjectList/>
      </div>
    </div>
  );
}
